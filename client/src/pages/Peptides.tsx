/**
 * World of Peptides Page - Luminous Depth Design
 * Educational content with visual peptide cards organized by category
 * Colors: Cyan (#4FC3F7), Purple (#7B2CBF), Magenta (#E91E8C)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import {
  ExternalLink, FlaskConical, Dna, Microscope, Atom, Brain, Heart,
  Shield, Sparkles, Zap, TrendingUp, Sun, Activity, Layers,
  Beaker, Search, Filter, BadgeCheck
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Icon map                                                           */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, any> = {
  FlaskConical, Dna, Microscope, Atom, Brain, Heart, Shield,
  Sparkles, Zap, TrendingUp, Sun, Activity, Layers, Beaker,
};

/* ------------------------------------------------------------------ */
/*  Peptide data type                                                  */
/* ------------------------------------------------------------------ */
interface PeptideRef {
  label: string;
  url: string;
}

type EvidenceLevel = "Phase III / Approved" | "Phase II" | "Clinical/Translational" | "Preclinical" | "Mechanistic" | "N/A";

interface PeptideData {
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  refs: PeptideRef[];
  section: string;
  evidence: EvidenceLevel;
}

/* ------------------------------------------------------------------ */
/*  Complete peptide dataset                                           */
/* ------------------------------------------------------------------ */
const allPeptides: PeptideData[] = [
  // ── Previously existing ──
  { name: "BPC-157", category: "Tissue Repair", description: "Synthetic pentadecapeptide. Preclinical studies describe involvement in tissue repair signaling and angiogenesis pathways. Human clinical data remain limited.", icon: "Heart", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "Sikiric et al., J Physiol Pharmacol, 2018", url: "https://pubmed.ncbi.nlm.nih.gov/30352184/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Cagrilintide", category: "Metabolic", description: "Long-acting amylin analogue under clinical investigation for metabolic research.", icon: "Zap", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "Lau et al., N Engl J Med, 2021", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519" }], evidence: "Phase II", section: "Therapeutics" },
  { name: "Epithalon", category: "Aging Research", description: "Synthetic tetrapeptide studied in aging biology models.", icon: "Sparkles", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "Khavinson et al., Front Genet, 2020", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7585677/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "GHK-Cu", category: "Skin Research", description: "Copper-binding tripeptide investigated in skin and extracellular matrix research.", icon: "Atom", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "Biomed Research International review", url: "https://pubmed.ncbi.nlm.nih.gov/25961032/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Ipamorelin", category: "Growth Hormone", description: "Synthetic pentapeptide growth hormone secretagogue.", icon: "FlaskConical", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "Raun et al., J Endocrinol, 1996", url: "https://pubmed.ncbi.nlm.nih.gov/8738381/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "SS-31 (Elamipretide)", category: "Mitochondrial", description: "Mitochondria-targeting tetrapeptide investigated in clinical research.", icon: "Microscope", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "Szeto & Birk, Annu Rev Pharmacol Toxicol, 2014", url: "https://pubmed.ncbi.nlm.nih.gov/24160793/" }], evidence: "Phase II", section: "Peptides" },
  { name: "Tesamorelin", category: "Growth Hormone", description: "GHRH analogue evaluated in controlled clinical trials for specific medical indications.", icon: "Brain", color: "from-[#4FC3F7] to-[#E91E8C]", refs: [{ label: "Falutz et al., N Engl J Med, 2010", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa0911259" }], evidence: "Phase III / Approved", section: "Therapeutics" },
  { name: "Thymosin Alpha-1", category: "Immune", description: "28-amino-acid peptide studied for immune modulation.", icon: "Shield", color: "from-[#7B2CBF] to-[#4FC3F7]", refs: [{ label: "Romani et al., Expert Opin Biol Ther, 2011", url: "https://pubmed.ncbi.nlm.nih.gov/21235331/" }], evidence: "Clinical/Translational", section: "Peptides" },

  // ── A) Peptides (research context) ──
  { name: "TB-500 (Thymosin Beta-4)", category: "Tissue Repair", description: "Thymosin beta-4 is an actin-binding peptide studied in cell migration and repair biology (primarily mechanistic/preclinical).", icon: "Heart", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "Nature — cardiac repair signaling study", url: "https://pubmed.ncbi.nlm.nih.gov/15085123/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "TB-500 Fragment 1-4", category: "Fragment", description: "Short sequence reference used in some catalogs; peer-reviewed literature is best tracked via sequence/fragment searches.", icon: "Atom", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/15256375/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "TB-500 Fragment 17-23", category: "Fragment", description: "Short fragment designation used in some research contexts; literature is typically fragment/sequence-specific.", icon: "Atom", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "Mechanistic study", url: "https://pubmed.ncbi.nlm.nih.gov/22962027/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "BPC-157/TB-500 Blend", category: "Blend", description: "Combination listing; peer-reviewed evidence is generally discussed at the component level, not as a fixed blend.", icon: "Layers", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "BPC-157 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157+peptide" }, { label: "Thymosin β4 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=thymosin+beta-4+peptide" }], evidence: "N/A", section: "Blends" },
  { name: "CJC-1295 (no DAC)", category: "Growth Hormone", description: "GHRH-analogue design investigated for endocrine signaling and pharmacology; 'no DAC' refers to absence of a drug-affinity complex modification.", icon: "TrendingUp", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "Human pharmacokinetic study", url: "https://pubmed.ncbi.nlm.nih.gov/16352683/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "CJC-1295 DAC", category: "Growth Hormone", description: "'DAC' refers to a modification intended to alter pharmacokinetics; literature is primarily pharmacology/endocrinology.", icon: "TrendingUp", color: "from-[#00ACC1] to-[#4FC3F7]", refs: [{ label: "Human pharmacokinetic study", url: "https://pubmed.ncbi.nlm.nih.gov/16352683/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "GHRP-2", category: "Growth Hormone", description: "Growth hormone releasing peptide class studied for GH-axis signaling and receptor pharmacology.", icon: "TrendingUp", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "Human clinical trial", url: "https://pubmed.ncbi.nlm.nih.gov/15699539/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "GHRP-6", category: "Growth Hormone", description: "Growth hormone releasing peptide studied for GH-axis signaling.", icon: "TrendingUp", color: "from-[#4FC3F7] to-[#E91E8C]", refs: [{ label: "Human clinical trial", url: "https://pubmed.ncbi.nlm.nih.gov/7617137/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "Hexarelin", category: "Growth Hormone", description: "Growth hormone secretagogue peptide studied in endocrine research.", icon: "TrendingUp", color: "from-[#7B2CBF] to-[#4FC3F7]", refs: [{ label: "Human clinical trial", url: "https://pubmed.ncbi.nlm.nih.gov/8126144/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "IGF-1 DES (Des(1-3) IGF-1)", category: "Growth Hormone", description: "Truncated IGF-1 variant used in research to study receptor binding and signaling differences.", icon: "TrendingUp", color: "from-[#00ACC1] to-[#7B2CBF]", refs: [{ label: "Review", url: "https://pubmed.ncbi.nlm.nih.gov/8930132/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "MGF IGF-1 Ec / MGF Without PEG", category: "Growth Hormone", description: "'MGF' is commonly discussed as IGF-1 splice variant signaling in muscle biology; naming in catalogs varies.", icon: "TrendingUp", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/21354439/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "ARA-290", category: "Tissue Repair", description: "EPO-derived peptide design studied for receptor-pathway selectivity and inflammation/neuropathic models in literature.", icon: "Heart", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "Human clinical study", url: "https://pubmed.ncbi.nlm.nih.gov/23318653/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "B7-33", category: "Tissue Repair", description: "B7-33 is discussed in relaxin receptor pathway research; literature focuses on signaling and fibrosis-model biology.", icon: "Heart", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/28478069/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Humanin", category: "Mitochondrial", description: "Humanin is studied as a mitochondrial-derived peptide with roles in cellular stress response models.", icon: "Dna", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "Review — mitochondrial peptide biology", url: "https://pubmed.ncbi.nlm.nih.gov/19438983/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "MOTS-C/Humanin Blend", category: "Blend", description: "Combination listing of mitochondrial peptides; evidence is component-based.", icon: "Layers", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "MOTS-C PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=MOTS-C+mitochondrial+derived+peptide" }, { label: "Humanin PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=humanin+mitochondrial+derived+peptide" }], evidence: "N/A", section: "Blends" },
  { name: "MOTS-C", category: "Mitochondrial", description: "Studied in metabolic adaptation and stress-response signaling (preclinical + emerging human literature).", icon: "Dna", color: "from-[#00ACC1] to-[#4FC3F7]", refs: [{ label: "Cell Metabolism (foundational discovery)", url: "https://pubmed.ncbi.nlm.nih.gov/26073497/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "LL-37", category: "Immune", description: "Endogenous antimicrobial peptide (cathelicidin) studied in innate immune signaling and host defense biology.", icon: "Shield", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "Innate immunity review", url: "https://pubmed.ncbi.nlm.nih.gov/16442477/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "DSIP (Delta Sleep Inducing Peptide)", category: "Neuropeptide", description: "Studied historically in sleep research; evidence is mixed and context-dependent.", icon: "Brain", color: "from-[#4FC3F7] to-[#E91E8C]", refs: [{ label: "Review (Graf 1984)", url: "https://pubmed.ncbi.nlm.nih.gov/6145137/" }, { label: "Update (Graf 1986)", url: "https://pubmed.ncbi.nlm.nih.gov/3550726/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "FOXO4-DRI", category: "Aging Research", description: "Designed to probe FOXO4-p53 interaction pathways in senescence models.", icon: "Microscope", color: "from-[#7B2CBF] to-[#4FC3F7]", refs: [{ label: "Cell (senolytic mechanism study)", url: "https://pubmed.ncbi.nlm.nih.gov/28212060/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Gonadorelin", category: "Hormone", description: "Synthetic GnRH used as a research/clinical reference compound in endocrine signaling literature.", icon: "Activity", color: "from-[#00ACC1] to-[#7B2CBF]", refs: [{ label: "Review (Lancet)", url: "https://pubmed.ncbi.nlm.nih.gov/19375120/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "GnRH (Triptorelin)", category: "Hormone", description: "GnRH agonist studied in endocrine pharmacology.", icon: "Activity", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "Clinical review", url: "https://pubmed.ncbi.nlm.nih.gov/15283728/" }], evidence: "Phase III / Approved", section: "Peptides" },
  { name: "PT-141 (Bremelanotide)", category: "Melanocortin", description: "Studied in controlled clinical settings for melanocortin receptor pathway pharmacology.", icon: "Sun", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "Phase III clinical trials", url: "https://pubmed.ncbi.nlm.nih.gov/31484594/" }], evidence: "Phase III / Approved", section: "Peptides" },
  { name: "Oxytocin", category: "Neuropeptide", description: "Cyclic nonapeptide studied in neuroendocrine signaling; outcomes in behavioral studies vary by design and population.", icon: "Brain", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "Lee MR et al., Biological Psychiatry", url: "https://pubmed.ncbi.nlm.nih.gov/19027999/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "KPV", category: "Immune", description: "Tripeptide (α-MSH fragment) studied in inflammation-pathway models, particularly epithelial/gut models.", icon: "Shield", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/18092346/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Semax", category: "Neuropeptide", description: "Discussed in Russian-origin literature and neurobiology research contexts; evidence base varies by indication and publication source.", icon: "Brain", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "Nootropic activity in humans", url: "https://pubmed.ncbi.nlm.nih.gov/9158593/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "Selank", category: "Neuropeptide", description: "Neuropeptide analogue studied in neurobiology research contexts.", icon: "Brain", color: "from-[#00ACC1] to-[#4FC3F7]", refs: [{ label: "Preclinical brain connectivity study", url: "https://pubmed.ncbi.nlm.nih.gov/32342318/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Selank/Semax Blend", category: "Blend", description: "Combination listing of neuropeptide analogues; evidence is component-based.", icon: "Layers", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "Selank PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Selank+peptide" }, { label: "Semax PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Semax+peptide" }], evidence: "N/A", section: "Blends" },
  { name: "Selank Amidate", category: "Neuropeptide", description: "Amidated variant typically referring to C-terminal amidation or stability-oriented modifications; verify exact structure per COA/spec sheet.", icon: "Brain", color: "from-[#4FC3F7] to-[#E91E8C]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/26924987/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "SNAP-8 (Acetyl Octapeptide-3)", category: "Skin Research", description: "Often discussed in cosmetic science contexts; peer-reviewed coverage is limited and sometimes industry-driven.", icon: "Sparkles", color: "from-[#7B2CBF] to-[#4FC3F7]", refs: [{ label: "Monocentric clinical study", url: "https://pubmed.ncbi.nlm.nih.gov/31134751/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "Thymalin", category: "Immune", description: "Thymus-derived peptide complex (bioregulator); standardization varies across literature.", icon: "Shield", color: "from-[#00ACC1] to-[#7B2CBF]", refs: [{ label: "Review", url: "https://pubmed.ncbi.nlm.nih.gov/9637345/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Thymulin", category: "Immune", description: "Thymic peptide hormone studied in T-cell maturation and thymic endocrine signaling.", icon: "Shield", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "Human clinical study", url: "https://pubmed.ncbi.nlm.nih.gov/3262625/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "Thymogen", category: "Immune", description: "Bioregulator peptide; verify exact sequence/identity per supplier documentation.", icon: "Shield", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/2337388/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Vilon", category: "Peptide", description: "Bioregulator peptide used in research contexts.", icon: "FlaskConical", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/12814488/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Bioregulator Peptides (Vesugen, Vesilute, Livagen, Ovagen, Pancragen, Prostamax, Testagen, Crystagen, Cardiogen, CardioCytogen, Bronchogen, Chonluten, Cartalax, Cortagen, Cortexin)", category: "Peptide", description: "Proprietary/categorized bioregulators; scientific validation and standardization depend on exact peptide composition and publication source.", icon: "FlaskConical", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "Cortexin PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Cortexin+peptide" }, { label: "Cartalax PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Cartalax" }, { label: "Thymalin PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Thymalin+peptide" }], evidence: "N/A", section: "Peptides" },

  // ── B) Peptide Therapeutics (GLP-1 / incretin / amylin axis) ──
  { name: "Semaglutide", category: "Therapeutic", description: "GLP-1 receptor agonist extensively studied in randomized clinical trials in metabolic research contexts.", icon: "Zap", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "NEJM (Wilding et al., 2021)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" }, { label: "More Literature", url: "https://pubmed.ncbi.nlm.nih.gov/?term=semaglutide+trial" }], evidence: "Phase III / Approved", section: "Therapeutics" },
  { name: "Tirzepatide", category: "Therapeutic", description: "Dual GIP/GLP-1 agonist studied in clinical trials for metabolic research.", icon: "Zap", color: "from-[#00ACC1] to-[#4FC3F7]", refs: [{ label: "NEJM (Jastreboff et al., 2022)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038" }, { label: "More Literature", url: "https://pubmed.ncbi.nlm.nih.gov/?term=tirzepatide+trial" }], evidence: "Phase III / Approved", section: "Therapeutics" },
  { name: "Liraglutide", category: "Therapeutic", description: "GLP-1 receptor agonist studied in clinical settings.", icon: "Zap", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "NEJM – LEADER Trial", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1603827" }], evidence: "Phase III / Approved", section: "Therapeutics" },
  { name: "Dulaglutide", category: "Therapeutic", description: "GLP-1 receptor agonist studied in clinical trials.", icon: "Zap", color: "from-[#4FC3F7] to-[#E91E8C]", refs: [{ label: "Lancet – REWIND Trial", url: "https://www.thelancet.com/article/S0140-6736(19)31149-3/fulltext" }], evidence: "Phase III / Approved", section: "Therapeutics" },
  { name: "Cagrilintide + Semaglutide", category: "Metabolic", description: "Combination strategy (amylin analogue + GLP-1 RA); evidence is trial-specific.", icon: "Zap", color: "from-[#7B2CBF] to-[#4FC3F7]", refs: [{ label: "Phase II clinical trial", url: "https://pubmed.ncbi.nlm.nih.gov/34170647/" }], evidence: "Phase II", section: "Therapeutics" },
  { name: "Retatrutide", category: "Therapeutic", description: "Multi-receptor agonist; investigational peptide therapeutic.", icon: "Zap", color: "from-[#00ACC1] to-[#7B2CBF]", refs: [{ label: "NEJM (Phase II)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972" }], evidence: "Phase II", section: "Therapeutics" },
  { name: "Mazdutide", category: "Therapeutic", description: "Incretin/glucagon-axis peptide therapeutic; investigational.", icon: "Zap", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "Phase II clinical trial", url: "https://pubmed.ncbi.nlm.nih.gov/37437773/" }], evidence: "Phase II", section: "Therapeutics" },
  { name: "Survodutide", category: "Therapeutic", description: "GLP-1/glucagon axis peptide therapeutic; investigational.", icon: "Zap", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "Phase II clinical trial", url: "https://pubmed.ncbi.nlm.nih.gov/37385277/" }], evidence: "Phase II", section: "Therapeutics" },
  { name: "Setmelanotide", category: "Therapeutic", description: "MC4R agonist studied in regulated drug context.", icon: "Zap", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "Lancet Diabetes & Endocrinology", url: "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(20)30364-8/fulltext" }], evidence: "Phase III / Approved", section: "Therapeutics" },

  // ── Melanocortin pathway ──
  { name: "Melanotan II", category: "Melanocortin", description: "Melanocortin receptor agonist; discussed in pharmacology and safety literature. Product identity/quality is a frequent concern outside regulated systems.", icon: "Sun", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "Pharmacology discussion & safety", url: "https://pubmed.ncbi.nlm.nih.gov/16815315/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "Melanotan-I (Afamelanotide)", category: "Melanocortin", description: "Melanocortin pathway peptide therapeutic; regulated drug context in some jurisdictions.", icon: "Sun", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "Clinical photoprotection study", url: "https://pubmed.ncbi.nlm.nih.gov/25569487/" }], evidence: "Phase III / Approved", section: "Peptides" },

  // ── Proteins / Biologics ──
  { name: "HGH 10 IU (Human Growth Hormone)", category: "Protein/Biologic", description: "191-amino-acid protein hormone; 'IU' denotes dosing units in medical products.", icon: "TrendingUp", color: "from-[#00ACC1] to-[#4FC3F7]", refs: [{ label: "Endocrine Society review", url: "https://pubmed.ncbi.nlm.nih.gov/21976742/" }], evidence: "Clinical/Translational", section: "Proteins" },
  { name: "IGF-1 LR3", category: "Protein/Biologic", description: "Protein/peptide growth factor analogue studied in research.", icon: "TrendingUp", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "Endocrine Reviews overview", url: "https://pubmed.ncbi.nlm.nih.gov/11294824/" }], evidence: "Clinical/Translational", section: "Proteins" },
  { name: "HMG (Human Menopausal Gonadotropin)", category: "Protein/Biologic", description: "Biologic hormone preparation with FSH/LH activity.", icon: "Activity", color: "from-[#4FC3F7] to-[#E91E8C]", refs: [{ label: "Human Reproduction Update", url: "https://pubmed.ncbi.nlm.nih.gov/26673170/" }], evidence: "Clinical/Translational", section: "Proteins" },
  { name: "HCG", category: "Protein/Biologic", description: "Glycoprotein hormone (biologic) studied in endocrine research.", icon: "Activity", color: "from-[#7B2CBF] to-[#4FC3F7]", refs: [{ label: "Endocrine literature review", url: "https://pubmed.ncbi.nlm.nih.gov/28731060/" }], evidence: "Clinical/Translational", section: "Proteins" },
  { name: "ACE-031", category: "Protein/Biologic", description: "ActRIIB-Fc fusion protein discussed in myostatin/activin pathway modulation research.", icon: "Microscope", color: "from-[#00ACC1] to-[#7B2CBF]", refs: [{ label: "Phase II clinical trial", url: "https://pubmed.ncbi.nlm.nih.gov/25655393/" }], evidence: "Phase II", section: "Proteins" },
  { name: "Myostatin / GDF-8", category: "Protein/Biologic", description: "Protein growth factor (TGF-β family) studied in muscle biology.", icon: "TrendingUp", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "Foundational discovery (Nature)", url: "https://pubmed.ncbi.nlm.nih.gov/9139826/" }], evidence: "Mechanistic", section: "Proteins" },
  { name: "VIP (Vasoactive Intestinal Peptide)", category: "Neuropeptide", description: "Neuropeptide/peptide hormone studied in neuroendocrine research.", icon: "Brain", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "Review", url: "https://pubmed.ncbi.nlm.nih.gov/17027741/" }], evidence: "Mechanistic", section: "Proteins" },

  // ── Small Molecules ──
  { name: "Dihexa", category: "Small Molecule", description: "AngIV-related small molecule discussed in HGF/c-Met pathway research; literature includes concerns about retractions/quality.", icon: "Beaker", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "HGF/c-Met pathway study", url: "https://pubmed.ncbi.nlm.nih.gov/25649658/" }], evidence: "Preclinical", section: "Small Molecules" },
  { name: "SLU-PP-332", category: "Small Molecule", description: "ERR agonist; small molecule studied in metabolic research.", icon: "Beaker", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "Nature Communications", url: "https://pubmed.ncbi.nlm.nih.gov/37739806/" }], evidence: "Preclinical", section: "Small Molecules" },
  { name: "5-Amino-1MQ", category: "Small Molecule", description: "NNMT inhibitor; small molecule studied in metabolic contexts.", icon: "Beaker", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "NNMT inhibition research", url: "https://pubmed.ncbi.nlm.nih.gov/28504763/" }], evidence: "Preclinical", section: "Small Molecules" },
  { name: "MK-677 (Ibutamoren)", category: "Small Molecule", description: "Ghrelin mimetic; small molecule studied in growth hormone secretagogue research.", icon: "Beaker", color: "from-[#00ACC1] to-[#4FC3F7]", refs: [{ label: "Human clinical trial", url: "https://pubmed.ncbi.nlm.nih.gov/18981485/" }], evidence: "Clinical/Translational", section: "Small Molecules" },
  { name: "Tesofensine", category: "Small Molecule", description: "Small molecule studied in metabolic research.", icon: "Beaker", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "Phase II obesity trial", url: "https://pubmed.ncbi.nlm.nih.gov/20300078/" }], evidence: "Phase II", section: "Small Molecules" },
  { name: "Methylene Blue", category: "Small Molecule", description: "Small molecule studied in mitochondrial function research.", icon: "Beaker", color: "from-[#4FC3F7] to-[#E91E8C]", refs: [{ label: "Mitochondrial function review", url: "https://pubmed.ncbi.nlm.nih.gov/23861395/" }], evidence: "Clinical/Translational", section: "Small Molecules" },

  // ── Other Peptides / Fragments ──
  { name: "AOD-9604", category: "Fragment", description: "HGH fragment 176-191 derivative studied in metabolic research.", icon: "Atom", color: "from-[#7B2CBF] to-[#4FC3F7]", refs: [{ label: "Human metabolic investigation", url: "https://pubmed.ncbi.nlm.nih.gov/11713213/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "HGH Fragment 176-191", category: "Fragment", description: "Peptide fragment studied in metabolic research.", icon: "Atom", color: "from-[#00ACC1] to-[#7B2CBF]", refs: [{ label: "Human metabolic investigation", url: "https://pubmed.ncbi.nlm.nih.gov/11713213/" }], evidence: "Clinical/Translational", section: "Peptides" },
  { name: "Follistatin 344 (FST-344)", category: "Protein/Biologic", description: "Follistatin isoform; larger protein context studied in muscle biology.", icon: "Microscope", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/11397846/" }], evidence: "Preclinical", section: "Proteins" },
  { name: "FGL Peptide (Fibroblast Growth Loop)", category: "Growth Hormone", description: "May map to neural adhesion/FG loop peptides in literature.", icon: "TrendingUp", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/18424768/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Dermorphin", category: "Peptide", description: "Opioid peptide from amphibian skin; used as a research tool.", icon: "Brain", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "Foundational study", url: "https://pubmed.ncbi.nlm.nih.gov/6285406/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "Adipotide / FTPP", category: "Fragment", description: "Fat targeted proapoptotic peptide studied in research.", icon: "FlaskConical", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "Preclinical study (Science TM)", url: "https://pubmed.ncbi.nlm.nih.gov/22116681/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "PN5", category: "Peptide", description: "Research peptide; identity must be verified per supplier.", icon: "FlaskConical", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/31036801/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "PNC-27 / PNC-28", category: "Peptide", description: "Research peptides studied in p53/HDM-2 interaction literature.", icon: "Microscope", color: "from-[#00ACC1] to-[#4FC3F7]", refs: [{ label: "PNC-27 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=PNC-27+peptide+HDM-2+p53" }, { label: "PNC-28 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=PNC-28+peptide" }], evidence: "Preclinical", section: "Peptides" },
  { name: "P21 (CNTF-derived)", category: "Neuropeptide", description: "Neurotrophic pathway probe derived from CNTF.", icon: "Brain", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "Preclinical study", url: "https://pubmed.ncbi.nlm.nih.gov/23459233/" }], evidence: "Preclinical", section: "Peptides" },
  { name: "MIF-1", category: "Neuropeptide", description: "Melanocyte-stimulating hormone release-inhibiting factor; neuroactive peptide.", icon: "Brain", color: "from-[#4FC3F7] to-[#E91E8C]", refs: [{ label: "Review", url: "https://pubmed.ncbi.nlm.nih.gov/6143543/" }], evidence: "Mechanistic", section: "Peptides" },

  // ── Coenzymes / Amino Acid Derivatives ──
  { name: "NAD+", category: "Coenzyme", description: "Central redox/metabolic cofactor in energy metabolism literature; clinical outcomes depend on context and are often studied via precursors.", icon: "Atom", color: "from-[#7B2CBF] to-[#4FC3F7]", refs: [{ label: "Science review (Hallmark NAD biology)", url: "https://pubmed.ncbi.nlm.nih.gov/25677505/" }], evidence: "Clinical/Translational", section: "Coenzymes" },
  { name: "L-Carnitine", category: "Coenzyme", description: "Amino acid derivative studied in metabolic research.", icon: "Atom", color: "from-[#00ACC1] to-[#7B2CBF]", refs: [{ label: "Clinical metabolism review", url: "https://pubmed.ncbi.nlm.nih.gov/25620533/" }], evidence: "Clinical/Translational", section: "Coenzymes" },

  // ── Laboratory Materials ──
  { name: "Bacteriostatic Water", category: "Lab Material", description: "Sterile water with benzyl alcohol preservative used as a diluent in controlled pharmaceutical/compounding contexts.", icon: "FlaskConical", color: "from-[#4FC3F7] to-[#00ACC1]", refs: [{ label: "USP Compounding Standards", url: "https://www.usp.org/compounding" }], evidence: "N/A", section: "Lab Materials" },
  { name: "Acetic Acid 0.6%", category: "Lab Material", description: "Laboratory reagent used as reconstitution solution for peptide stability.", icon: "FlaskConical", color: "from-[#7B2CBF] to-[#9C27B0]", refs: [{ label: "USP Compounding Standards", url: "https://pubmed.ncbi.nlm.nih.gov/24085449/" }], evidence: "N/A", section: "Lab Materials" },

  // ── Blends ──
  { name: "KLOW Blend (KPV/BPC-157/TB-500/GHK)", category: "Blend", description: "Multi-component blend; scientific support is component-based; blend identity/ratio is supplier-defined.", icon: "Layers", color: "from-[#E91E8C] to-[#C2185B]", refs: [{ label: "KPV PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=KPV+tripeptide" }, { label: "BPC-157 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157" }, { label: "TB-500 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=thymosin+beta-4" }, { label: "GHK PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=GHK+tripeptide" }], evidence: "N/A", section: "Blends" },
  { name: "GLOW Blend (BPC-157/TB-500/GHK-Cu)", category: "Blend", description: "Multi-component blend; evidence is component-based.", icon: "Layers", color: "from-[#4FC3F7] to-[#7B2CBF]", refs: [{ label: "BPC-157 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157" }, { label: "TB-500 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=thymosin+beta-4" }, { label: "GHK-Cu PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=GHK-Cu" }], evidence: "N/A", section: "Blends" },
  { name: "CJC-1295 DAC/Ipamorelin Blend", category: "Blend", description: "Combination of GHRH analogue with growth hormone secretagogue.", icon: "Layers", color: "from-[#7B2CBF] to-[#E91E8C]", refs: [{ label: "CJC-1295 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=CJC-1295" }, { label: "Ipamorelin PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=ipamorelin" }], evidence: "N/A", section: "Blends" },
  { name: "CJC-1295 No DAC/Ipamorelin Blend", category: "Blend", description: "Combination of GHRH analogue (no DAC) with growth hormone secretagogue.", icon: "Layers", color: "from-[#00ACC1] to-[#4FC3F7]", refs: [{ label: "CJC-1295 PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=CJC-1295" }, { label: "Ipamorelin PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/?term=ipamorelin" }], evidence: "N/A", section: "Blends" },
  { name: "GLOW 3.0 / Advanced Multi-Component Research Blend", category: "Blend", description: "Multi-component research listing; provide component list and PubMed links per component.", icon: "Layers", color: "from-[#E91E8C] to-[#7B2CBF]", refs: [{ label: "Component-based evidence", url: "https://pubmed.ncbi.nlm.nih.gov/?term=peptide+combination+research" }], evidence: "N/A", section: "Blends" },
];

/* ------------------------------------------------------------------ */
/*  Section definitions for display                                    */
/* ------------------------------------------------------------------ */
const sectionOrder = [
  { key: "All", label: "All" },
  { key: "Peptides", label: "Peptides" },
  { key: "Therapeutics", label: "Therapeutics (GLP-1 / Incretin)" },
  { key: "Proteins", label: "Proteins & Biologics" },
  { key: "Small Molecules", label: "Small Molecules" },
  { key: "Blends", label: "Blends" },
  { key: "Coenzymes", label: "Coenzymes & Derivatives" },
  { key: "Lab Materials", label: "Lab Materials" },
];

/* ------------------------------------------------------------------ */
/*  Category color badge mapping                                       */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/*  Evidence level badge mapping                                       */
/* ------------------------------------------------------------------ */
const evidenceBadgeColors: Record<EvidenceLevel, { bg: string; text: string; border: string }> = {
  "Phase III / Approved": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Phase II": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Clinical/Translational": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Preclinical": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  "Mechanistic": { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200" },
  "N/A": { bg: "bg-gray-50", text: "text-gray-500", border: "border-gray-200" },
};

const evidenceLevels: { key: EvidenceLevel | "All"; label: string }[] = [
  { key: "All", label: "All Evidence" },
  { key: "Phase III / Approved", label: "Phase III / Approved" },
  { key: "Phase II", label: "Phase II" },
  { key: "Clinical/Translational", label: "Clinical/Translational" },
  { key: "Preclinical", label: "Preclinical" },
  { key: "Mechanistic", label: "Mechanistic" },
];

const categoryBadgeColors: Record<string, string> = {
  "Tissue Repair": "bg-cyan-100 text-cyan-700",
  "Metabolic": "bg-amber-100 text-amber-700",
  "Aging Research": "bg-pink-100 text-pink-700",
  "Skin Research": "bg-rose-100 text-rose-700",
  "Growth Hormone": "bg-blue-100 text-blue-700",
  "Mitochondrial": "bg-teal-100 text-teal-700",
  "Immune": "bg-green-100 text-green-700",
  "Neuropeptide": "bg-purple-100 text-purple-700",
  "Hormone": "bg-indigo-100 text-indigo-700",
  "Melanocortin": "bg-orange-100 text-orange-700",
  "Therapeutic": "bg-violet-100 text-violet-700",
  "Protein/Biologic": "bg-sky-100 text-sky-700",
  "Small Molecule": "bg-lime-100 text-lime-700",
  "Fragment": "bg-slate-100 text-slate-700",
  "Blend": "bg-fuchsia-100 text-fuchsia-700",
  "Peptide": "bg-gray-100 text-gray-600",
  "Coenzyme": "bg-emerald-100 text-emerald-700",
  "Lab Material": "bg-zinc-100 text-zinc-600",
};

export default function Peptides() {
  const [activeSection, setActiveSection] = useState("All");
  const [activeEvidence, setActiveEvidence] = useState<EvidenceLevel | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPeptides = useMemo(() => {
    return allPeptides.filter((p) => {
      const matchesSection = activeSection === "All" || p.section === activeSection;
      const matchesEvidence = activeEvidence === "All" || p.evidence === activeEvidence;
      const matchesSearch = !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSection && matchesEvidence && matchesSearch;
    });
  }, [activeSection, activeEvidence, searchQuery]);

  return (
    <div className="min-h-screen bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/VvtbnjABXSbXHfiR.png')] bg-cover bg-fixed bg-center">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm border border-[oklch(0.75_0.15_200)]/30 text-[oklch(0.5_0.15_200)] mb-6">
                Educational Resource
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#1A365D] mb-6 font-['Sora']">
                World of{" "}
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#7B2CBF] to-[#E91E8C] bg-clip-text text-transparent">
                  Peptides
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                High-level, non-promotional, educational information regarding peptides and related bioactive compounds as discussed in peer-reviewed scientific literature.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-[#1A365D] to-[#1e3a5f] rounded-2xl p-8 md:p-10 text-white"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 font-['Sora']" style={{color: '#83cec1'}}>Purpose and Scope</h2>
              <p className="text-white/90 leading-relaxed">
                This document provides high-level, non-promotional, educational information regarding peptides and related bioactive compounds as discussed in peer-reviewed scientific literature. <strong>No statements herein are intended to diagnose, treat, cure, mitigate, or prevent any disease.</strong> Regulatory status, permitted uses, and safety profiles vary by jurisdiction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-gray-200 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4FC3F7] to-[#7B2CBF] flex items-center justify-center flex-shrink-0">
                  <Dna className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] font-['Sora']">Definition of Peptides</h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Peptides are short chains of amino acids linked by peptide bonds. In biological systems, peptides may function as signaling molecules, hormones, or structural components.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The World Health Organization (WHO) classifies therapeutic peptides within the broader category of biotherapeutic products, emphasizing standardized nomenclature (INN), quality control, and regulatory evaluation rather than consumer health claims.
              </p>
              <a
                href="https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[oklch(0.5_0.15_200)] hover:text-[oklch(0.4_0.18_280)] transition-colors font-medium"
              >
                <span>WHO – Biologicals and Biotherapeutic Products</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4 font-['Sora']">
                Selected Peptides &{" "}
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#7B2CBF] to-[#E91E8C] bg-clip-text text-transparent">
                  Research Context
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Explore peer-reviewed research on various peptides, proteins, small molecules, and related compounds.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search peptides, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]/50 focus:border-[#4FC3F7] transition-all"
                  />
                </div>
              </div>

              {/* Section Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {sectionOrder.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => setActiveSection(section.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      activeSection === section.key
                        ? "bg-gradient-to-r from-[#4FC3F7] to-[#7B2CBF] text-white shadow-lg"
                        : "bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-white hover:shadow-md hover:scale-105"
                    }`}
                  >
                    <Filter className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Evidence Level Filters */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {evidenceLevels.map((ev) => (
                  <button
                    key={ev.key}
                    onClick={() => setActiveEvidence(ev.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      activeEvidence === ev.key
                        ? "bg-gradient-to-r from-[#E91E8C] to-[#7B2CBF] text-white shadow-lg"
                        : "bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-white hover:shadow-md hover:scale-105"
                    }`}
                  >
                    <BadgeCheck className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                    {ev.label}
                  </button>
                ))}
              </div>

              {/* Results count */}
              <p className="text-sm text-gray-500 mt-4">
                Showing {filteredPeptides.length} of {allPeptides.length} compounds
              </p>
            </motion.div>

            {/* Peptides Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPeptides.map((peptide, index) => {
                const IconComponent = iconMap[peptide.icon] || FlaskConical;
                const badgeColor = categoryBadgeColors[peptide.category] || "bg-gray-100 text-gray-600";
                return (
                  <motion.div
                    key={peptide.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                    className="group"
                  >
                    <div className="h-full bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${peptide.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeColor}`}>
                          {peptide.category}
                        </span>
                      </div>

                      {/* Evidence Badge */}
                      {peptide.evidence !== "N/A" && (
                        <div className="mb-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${evidenceBadgeColors[peptide.evidence].bg} ${evidenceBadgeColors[peptide.evidence].text} ${evidenceBadgeColors[peptide.evidence].border}`}>
                            <BadgeCheck className="w-3 h-3" />
                            {peptide.evidence}
                          </span>
                        </div>
                      )}

                      {/* Card Content */}
                      <h3 className="text-xl font-bold text-[#1A365D] mb-3 font-['Sora'] group-hover:text-[oklch(0.5_0.15_200)] transition-colors">
                        {peptide.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {peptide.description}
                      </p>

                      {/* References */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">
                          {peptide.refs.length > 1 ? "References:" : "Reference:"}
                        </p>
                        <div className="space-y-1.5">
                          {peptide.refs.map((ref, refIdx) => (
                            <a
                              key={refIdx}
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-[oklch(0.5_0.15_200)] hover:text-[oklch(0.4_0.18_280)] transition-colors font-medium"
                            >
                              <span className="line-clamp-1">{ref.label}</span>
                              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* No results */}
            {filteredPeptides.length === 0 && (
              <div className="text-center py-16">
                <FlaskConical className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No compounds found matching your search.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveSection("All"); setActiveEvidence("All"); }}
                  className="mt-4 text-[oklch(0.5_0.15_200)] hover:underline font-medium cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A365D] via-[#1e3a5f] to-[#1A365D] p-10 md:p-16"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#4FC3F7]/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#E91E8C]/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Sora']">
                  Interested in Research Peptides?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  TRU & CO provides high-purity research peptides with comprehensive analytical documentation. All materials are intended for research use only.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4FC3F7] to-[#7B2CBF] text-white font-semibold rounded-xl hover:shadow-[0_8px_30px_rgba(79,195,247,0.4)] transition-all duration-500"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
