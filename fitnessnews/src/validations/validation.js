import * as Yup from 'yup';

Yup.setLocale({
   mixed:{
      required:'Bu alan doldurulmalidir',
      oneOf:'Bu alanı işarətləmək lazım'
   }
})
export default Yup