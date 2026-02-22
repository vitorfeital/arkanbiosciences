/**
 * PRC - Peptide Reconstitution Calculator
 * 
 * Design Philosophy: Luminous Depth with Light Theme
 * - Clean white/light gray backgrounds with molecular pattern
 * - Glass cards with subtle shadows
 * - Gradient accents (cyan → purple → magenta)
 * - Professional typography: Sora for headings, DM Sans for body
 */

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Search,
  Droplets,
  Syringe,
  Calculator as CalcIcon,
  RotateCcw,
  Info,
  ChevronDown,
  AlertTriangle,
  Beaker,
  Target,
  TrendingUp,
  Hash,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { peptides, defaultBacWaterOptions, type PeptideData } from "@/data/peptides";

interface CalculationResult {
  concentration: number;
  volumePerDose: number;
  syringeUnits: number;
  dosesPerVial: number;
}

export default function CalculatorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeptide, setSelectedPeptide] = useState<PeptideData | null>(null);
  const [vialSize, setVialSize] = useState("");
  const [bacWater, setBacWater] = useState("");
  const [desiredDose, setDesiredDose] = useState("");
  const [doseUnit, setDoseUnit] = useState<"mcg" | "mg">("mcg");
  const [showDropdown, setShowDropdown] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPeptides = useMemo(() => {
    if (!searchQuery.trim()) return peptides;
    const query = searchQuery.toLowerCase();
    return peptides.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.aliases.some((a) => a.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const selectPeptide = (peptide: PeptideData) => {
    setSelectedPeptide(peptide);
    setSearchQuery(peptide.name);
    setShowDropdown(false);
    // Auto-fill first common vial size
    if (peptide.commonSizes.length > 0) {
      setVialSize(peptide.commonSizes[0].toString());
    }
  };

  const calculate = () => {
    const vial = parseFloat(vialSize);
    const water = parseFloat(bacWater);
    const dose = parseFloat(desiredDose);

    if (!vial || !water || !dose || vial <= 0 || water <= 0 || dose <= 0) return;

    // Convert dose to mg if in mcg
    const doseMg = doseUnit === "mcg" ? dose / 1000 : dose;

    const concentration = vial / water; // mg/mL
    const volumePerDose = doseMg / concentration; // mL
    const syringeUnits = volumePerDose * 100; // units (U-100 syringe)
    const dosesPerVial = vial / doseMg;

    setResult({
      concentration: Math.round(concentration * 10000) / 10000,
      volumePerDose: Math.round(volumePerDose * 10000) / 10000,
      syringeUnits: Math.round(syringeUnits * 100) / 100,
      dosesPerVial: Math.floor(dosesPerVial),
    });
  };

  const reset = () => {
    setSearchQuery("");
    setSelectedPeptide(null);
    setVialSize("");
    setBacWater("");
    setDesiredDose("");
    setDoseUnit("mcg");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663028460647/VvtbnjABXSbXHfiR.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <Header />

      <main className="relative z-10 pt-32 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-700 mb-6">
              <FlaskConical className="w-4 h-4" />
              Research Tool
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a365d] mb-4 font-['Sora']">
              Peptide Reconstitution{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Calculate precise dosing for 100+ peptide compounds. Enter your vial size, BAC water amount, and desired dose to get exact syringe measurements.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Calculator Form - Left Side */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8">
                {/* Step 1: Select Peptide */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</div>
                    <h3 className="text-lg font-bold text-[#1a365d] font-['Sora']">Select Peptide Compound</h3>
                  </div>
                  <p className="text-sm text-gray-500 ml-11 mb-3">Choose the peptide compound to calculate.</p>
                  <div className="relative ml-11" ref={dropdownRef}>
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search Peptides..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowDropdown(true);
                        setSelectedPeptide(null);
                      }}
                      onFocus={() => setShowDropdown(true)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-dashed border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors bg-gray-50/50 text-gray-800"
                    />
                    <AnimatePresence>
                      {showDropdown && filteredPeptides.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-64 overflow-y-auto"
                        >
                          {filteredPeptides.map((peptide) => (
                            <button
                              key={peptide.name}
                              onClick={() => selectPeptide(peptide)}
                              className="w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors border-b border-gray-50 last:border-0"
                            >
                              <div className="font-medium text-gray-800">{peptide.name}</div>
                              <div className="text-xs text-gray-500">{peptide.description}</div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {selectedPeptide && (
                    <div className="ml-11 mt-3 flex flex-wrap gap-2">
                      {selectedPeptide.commonSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setVialSize(size.toString())}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                            vialSize === size.toString()
                              ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent"
                          }`}
                        >
                          {size} mg
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Step 2: Vial Size */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">2</div>
                    <h3 className="text-lg font-bold text-[#1a365d] font-['Sora']">Vial Size (mg)</h3>
                  </div>
                  <p className="text-sm text-gray-500 ml-11 mb-3">How much peptide powder is in the vial. Ex: 2mg, 5mg, 10mg.</p>
                  <div className="relative ml-11">
                    <Beaker className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Enter Vial Size (mg)"
                      value={vialSize}
                      onChange={(e) => setVialSize(e.target.value)}
                      className="w-full pl-12 pr-16 py-3.5 rounded-xl border-2 border-dashed border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors bg-gray-50/50 text-gray-800"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">mg</span>
                  </div>
                </div>

                {/* Step 3: BAC Water */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">3</div>
                    <h3 className="text-lg font-bold text-[#1a365d] font-['Sora']">BAC Water (mL)</h3>
                  </div>
                  <p className="text-sm text-gray-500 ml-11 mb-3">How much sterile/BAC water will be added to the vial.</p>
                  <div className="ml-11 flex gap-2 mb-3">
                    {defaultBacWaterOptions.map((ml) => (
                      <button
                        key={ml}
                        onClick={() => setBacWater(ml.toString())}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          bacWater === ml.toString()
                            ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent"
                        }`}
                      >
                        {ml} mL
                      </button>
                    ))}
                  </div>
                  <div className="relative ml-11">
                    <Droplets className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Enter BAC water amount (mL)"
                      value={bacWater}
                      onChange={(e) => setBacWater(e.target.value)}
                      className="w-full pl-12 pr-16 py-3.5 rounded-xl border-2 border-dashed border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors bg-gray-50/50 text-gray-800"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">mL</span>
                  </div>
                </div>

                {/* Step 4: Desired Dose */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">4</div>
                    <h3 className="text-lg font-bold text-[#1a365d] font-['Sora']">Desired Dose</h3>
                  </div>
                  <p className="text-sm text-gray-500 ml-11 mb-3">Type an exact (MCG/MG) you want per dose.</p>
                  <div className="ml-11 flex gap-2 mb-3">
                    <button
                      onClick={() => setDoseUnit("mcg")}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                        doseUnit === "mcg"
                          ? "bg-emerald-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      MCG
                    </button>
                    <button
                      onClick={() => setDoseUnit("mg")}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                        doseUnit === "mg"
                          ? "bg-emerald-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      MG
                    </button>
                  </div>
                  <div className="relative ml-11">
                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Enter Your Desired Dose"
                      value={desiredDose}
                      onChange={(e) => setDesiredDose(e.target.value)}
                      className="w-full pl-12 pr-16 py-3.5 rounded-xl border-2 border-dashed border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors bg-gray-50/50 text-gray-800"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">{doseUnit}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 ml-11">
                  <button
                    onClick={calculate}
                    className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <CalcIcon className="w-5 h-5" />
                    Calculate
                  </button>
                  <button
                    onClick={reset}
                    className="w-14 h-14 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-all"
                    title="Reset all fields"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>

                {/* Results */}
                <AnimatePresence>
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-8 ml-11"
                    >
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                        <h3 className="text-lg font-bold text-[#1a365d] mb-4 font-['Sora'] flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-emerald-500" />
                          Calculation Results
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="text-sm text-gray-500 mb-1">Concentration</div>
                            <div className="text-2xl font-bold text-[#1a365d]">{result.concentration}</div>
                            <div className="text-xs text-emerald-600 font-medium">mg/mL</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="text-sm text-gray-500 mb-1">Volume per Dose</div>
                            <div className="text-2xl font-bold text-[#1a365d]">{result.volumePerDose}</div>
                            <div className="text-xs text-emerald-600 font-medium">mL</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="text-sm text-gray-500 mb-1">Syringe Units</div>
                            <div className="text-2xl font-bold text-[#1a365d]">{result.syringeUnits}</div>
                            <div className="text-xs text-emerald-600 font-medium">units</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="text-sm text-gray-500 mb-1">Doses per Vial</div>
                            <div className="text-2xl font-bold text-[#1a365d]">{result.dosesPerVial}</div>
                            <div className="text-xs text-emerald-600 font-medium">doses</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side - Info Panels */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* How It Works */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-[#1a365d] mb-4 font-['Sora'] flex items-center gap-2">
                  <CalcIcon className="w-5 h-5 text-emerald-500" />
                  How It Works
                </h3>
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Select Your Peptide", desc: "Search from 100+ compounds. The calculator will auto-fill common vial sizes." },
                    { step: 2, title: "Enter Vial & Water", desc: "Specify the peptide amount (mg) in your vial and how much BAC water you'll add." },
                    { step: 3, title: "Set Your Dose", desc: "Enter your desired dose in MCG or MG per injection." },
                    { step: 4, title: "Get Results", desc: "See exact syringe units, concentration, volume, and doses per vial." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm font-bold flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-[#1a365d] text-sm">{item.title}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reference Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1583912086296-be5b665036d3?w=400&h=300&fit=crop"
                    alt="Peptide Vial"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <div className="font-semibold text-sm text-[#1a365d]">Peptide Vial</div>
                    <div className="text-xs text-gray-500">Lyophilized powder</div>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop"
                    alt="U-100 Syringe"
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <div className="font-semibold text-sm text-[#1a365d]">U-100 Syringe</div>
                    <div className="text-xs text-gray-500">1mL = 100 units</div>
                  </div>
                </div>
              </div>

              {/* Key Formulas */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-[#1a365d] mb-4 font-['Sora'] flex items-center gap-2">
                  <Hash className="w-5 h-5 text-emerald-500" />
                  Key Formulas
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Concentration", formula: "Vial (mg) ÷ BAC Water (mL)", unit: "mg/mL" },
                    { label: "Volume per Dose", formula: "Dose (mg) ÷ Concentration", unit: "mL" },
                    { label: "Syringe Units", formula: "Volume (mL) × 100", unit: "units" },
                    { label: "Doses per Vial", formula: "Vial (mg) ÷ Dose (mg)", unit: "doses" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                      <div>
                        <div className="font-semibold text-sm text-[#1a365d]">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.formula}</div>
                      </div>
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{item.unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Use Disclaimer */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-800 mb-2">Research Use Only</h4>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      This calculator is provided for research and educational purposes only. It is not intended to provide medical advice. Always consult with a qualified healthcare professional before using any peptide compounds. Calculations should be verified independently.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
