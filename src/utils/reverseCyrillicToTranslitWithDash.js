import cyrillicToTranslit from "cyrillic-to-translit-js";

const reverseCyrillicToTranslitWithDash = (input) => {
   let replaced = input.replace(/-/g, ' ');
   let transliterated = cyrillicToTranslit({ preset: 'uk' }).reverse(replaced);
   transliterated = transliterated.replace(/\s+/g, '-');
   return transliterated;
 }

 export default reverseCyrillicToTranslitWithDash;