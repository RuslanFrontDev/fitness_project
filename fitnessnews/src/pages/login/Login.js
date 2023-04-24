import { Form, Formik } from "formik";
import Input from "../../components/form/Input";
import CheckBox from "../../components/form/CheckBox";
import TextArea from "../../components/form/TextArea";
import Select from "../../components/form/Select";
import Telephones from "../../components/form/Telephones";
import { LoginSchema } from "../../validations";
import EmailInput from "../../components/form/EmailInput";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Login() {
  const navigator = useNavigate();
  return (
    <>
      <div className="m-5">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="  flex items-center p-2 text-lg font-bold justify-center bg-green-500 rounded ">
            Bizimlə doğru məşq edin və doğru qidalanın
          </h1>
          <p className="text-sm bg-[#DDD] p-1">
            Bu form-u dolduraraq bizimlə düzgün qidalana və düzgün hərəkətləri
            görə bilərsiniz
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            number: "",
            about: "",
            gender: 1,
            accept: false,
          }}
          onSubmit={async (values) => {
            const { name, email, number, about, gender, accept } = values;
            const user = await fetch("http://localhost:5000/user/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                number,
                about,
                gender,
                accept,
              }),
            })
            const data = await user.json();
            if(data.access_token){
              localStorage.setItem('token', data.access_token)
              navigator("/movie")
            }else{
              console.log(data.message);
            }
              // .then((res) => res.json())
              // .then((data) =>
              //   data.access_token ? navigator("/movie") : false,
              // );
          }}
          validationSchema={LoginSchema}
        >
          {({ values }) => (
            <div>
              <Form className="p-6 grid gap-y-4 border rounded p-4 m-4 shadow-lg">
                <Input label="Adınız:" name="name" />
                <EmailInput label="Emailiniz:" name="email" />
                <Telephones label="Telefon nomreniz:" name="number" />
                <TextArea
                  rows={6}
                  label="Məşqlərimizə qoşulmaq istəyirsiniz?"
                  name="about"
                />
                <Select
                  label="Cinsiyyet"
                  name="gender"
                  options={[
                    { key: "1", value: "Qadin" },
                    { key: "2", value: "Kisi" },
                  ]}
                />
                <CheckBox label="Qaydalari qebul edirem" name="accept" />
                <button
                  className="h-10 rounded bg-black text-white px-5"
                  type="submit"
                >
                  Gonder
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}
export default Login;
