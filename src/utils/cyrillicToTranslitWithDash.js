import cyrillicToTranslit from "cyrillic-to-translit-js";
 const cyrillicToTranslitWithDash = (input) => {
   let transliterated = cyrillicToTranslit({ preset: 'uk' }).transform(input);
   transliterated = transliterated.replace(/\s+/g, '-');
   return transliterated;
 }

 export default cyrillicToTranslitWithDash
