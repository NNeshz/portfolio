# 🌑 Portfolio Minimalista | [nneshz](https://tu-portfolio.vercel.app)  

**Portfolio técnico open-source** con diseño blanco/negro, i18n y componentes accesibles. Desarrollado con Astro 5, React 19 y shadcn/ui.  

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnneshz%2Fportfolio)  
![Demo](https://raw.githubusercontent.com/nneshz/portfolio/main/public/social-preview.png)  

## ✨ Características  
- **🚀 Astro 5 + React 19**: Rendimiento estático con islands architecture.  
- **🎨 shadcn/ui**: Componentes accesibles (Slot, CVA, tailwind-merge).  
- **📡 SEO Avanzado**: Optimizado con @astrolib/seo.  
- **🔠 Tipografía moderna**: Geist Sans como fuente principal.  
- **✨ Micro-interacciones**: Animaciones con tw-animate-css.  

## 🛠 Stack Técnico  
```bash
Astro 5.8 | React 19 | shadcn/ui | Tailwind CSS 4 | Geist Sans | Lucide Icons
```  

## 📦 Dependencias Clave  
```json
"dependencies": {
  "@astrojs/react": "^4.3.0",
  "@astrolib/seo": "^1.0.0-beta.8",
  "@fontsource/geist-sans": "^5.2.5",
  "@radix-ui/react-slot": "^1.2.3",
  "class-variance-authority": "^0.7.1",
  "lucide-react": "^0.511.0",
  "tailwind-merge": "^3.3.0"
}
```  

## 🚀 Instalación  
1. Clona el repositorio:  
```bash  
git clone https://github.com/nneshz/portfolio.git  
```  
2. Instala dependencias:  
```bash  
bun install  
```  
3. Ejecuta en desarrollo:  
```bash  
bun run dev  
```  

## 🎨 Personalización  
### Añade tu contenido  
- **Experiencia laboral**: Edita `src/content/experience.md`  
- **Proyectos**: Modifica `src/content/projects.json`  
- **SEO**: Configura `src/astro.config.mjs`  

### Cambia estilos  
1. Colores B&N en `src/styles/global.css`  
2. Animaciones en `tailwind.config.js` usando `tw-animate-css`  

## 📜 Licencia  
MIT License. **¡Usa y adapta libremente!**  

---  
**🔗 Demo**: [portfolio-nneshz.vercel.app](https://portfolio-nneshz.vercel.app)  
**🐞 Issues/Contribuciones**: ¡Bienvenidas!  

---  
[![Star on GitHub](https://img.shields.io/github/stars/nneshz/portfolio?style=social)](https://github.com/nneshz/portfolio)  

---  