import Sekil1 from "../../sekiller/Sekil1";

function About() {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 p-2 md:p-4">
        <h2>Haqqımızda</h2>
      </div>
      <div className="w-full h-full mt-3 ">
        <div className="flex items-center justify-start">
          <h2 className="flex items-center justify-center bg-blue-500 p-2 rounded text-yellow-900">
            Trainer Tuqay Hüseynzade
          </h2>
        </div>
        <div className="xl:flex justify-center items-center  space-y-5 ml-7">
          <div className="flex items-center justify-center mr-8">
            <p className="w-[550px] ">
              06.15.1999-cu il <strong>Gədəbəy</strong> rayonunda anadan
              olmuşam. İdmana həvəsim uşaqlıqdan başlayıb. 2il cüdo ilə məşğul
              olmuşam və dərəcələrim də var. Fitness-ə həvəs Universitet
              illərindən başladı. Fitness ilə bağlı məlumatlarım və bunun
              haqqında çoxsaylı kitablar aldığəm məlumatları bu saytla sizinlə
              bölüşüb idmana həvəsinizi daha da artırmaq, pis vərdişlərdən
              uzaqlaşdırıb, gələcəyə sağlam gözüylə baxmağınıza dair əlimdən
              gələni etməyə hazıram. bu saytı yığmaqda və mənimlə bir məşq edən
              Ruslan Rüstəmov da sizinlə bir yerdə olacaq.{" "}
              <strong>Birlikdə sağlam olaq.</strong>
            </p>
          </div>
          <div className="bg-cover bg-center flex justify-center items-center ">
            <Sekil1 />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
