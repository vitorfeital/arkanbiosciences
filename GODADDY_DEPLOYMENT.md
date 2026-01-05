# GoDaddy Deployment Guide for Tru & Co Website

This guide explains how to deploy your Tru & Co website to GoDaddy hosting.

## Prerequisites

- GoDaddy hosting account with cPanel access
- FTP credentials from GoDaddy
- Built website files

## Step 1: Build the Website

Before uploading to GoDaddy, you need to build the production version:

```bash
cd /home/ubuntu/tru-co-website
pnpm install
pnpm build
```

This will create a `dist/public` folder with all the static files ready for deployment.

## Step 2: Prepare Files for Upload

The files you need to upload are located in:
```
/home/ubuntu/tru-co-website/dist/public/
```

This folder contains:
- `index.html` - Main HTML file
- `assets/` - JavaScript, CSS, and other bundled assets
- `images/` - All your images including logo
- `.htaccess` - Apache configuration for routing

## Step 3: Upload to GoDaddy

### Option A: Using cPanel File Manager

1. Log in to your GoDaddy cPanel
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root directory)
4. Delete any existing files (if this is a fresh install)
5. Upload all files from `dist/public/` to `public_html/`
6. Make sure `.htaccess` file is uploaded (enable "Show Hidden Files" if needed)

### Option B: Using FTP Client (Recommended)

1. Download an FTP client like FileZilla (https://filezilla-project.org/)
2. Connect using your GoDaddy FTP credentials:
   - Host: Your domain or FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
3. Navigate to `public_html` on the remote side
4. Upload all contents from `dist/public/` to `public_html/`

## Step 4: Verify Deployment

1. Visit your domain in a browser
2. Check that:
   - The homepage loads correctly
   - Images appear properly
   - Navigation works
   - All links function correctly

## Important Notes

### .htaccess File
The `.htaccess` file is crucial for:
- Client-side routing (React Router/Wouter)
- GZIP compression
- Cache control for performance

Make sure this file is uploaded to the root of your `public_html` directory.

### File Permissions
If you encounter any issues, check file permissions in cPanel:
- Directories: 755
- Files: 644

### Custom Domain
If you're using a custom domain:
1. Point your domain's DNS to GoDaddy nameservers
2. Wait for DNS propagation (can take 24-48 hours)
3. Configure the domain in cPanel under "Domains"

### SSL Certificate
GoDaddy typically provides free SSL certificates:
1. Go to cPanel → SSL/TLS Status
2. Install SSL certificate for your domain
3. Your site will be accessible via HTTPS

## Troubleshooting

### Issue: Blank page or 404 errors
- Solution: Ensure `.htaccess` file is uploaded and mod_rewrite is enabled

### Issue: Images not loading
- Solution: Check that the `images/` folder is uploaded correctly
- Verify file paths are relative (starting with `/images/`)

### Issue: Styles not applying
- Solution: Clear browser cache
- Check that `assets/` folder is uploaded with all CSS files

### Issue: "Internal Server Error"
- Solution: Check `.htaccess` syntax
- Verify Apache modules (mod_rewrite, mod_deflate) are enabled

## Performance Optimization

The website is already optimized with:
- ✅ GZIP compression via `.htaccess`
- ✅ Cache headers for static assets
- ✅ Minified JavaScript and CSS
- ✅ Optimized images

## Support

For GoDaddy-specific hosting issues:
- Contact GoDaddy Support: https://www.godaddy.com/help
- Check GoDaddy's documentation on static website hosting

For website functionality issues:
- Review the main README.md in the project root
- Check browser console for JavaScript errors
