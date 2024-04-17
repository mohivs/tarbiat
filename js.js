// import * as fs from "fs";

const result = document.querySelector(".result");

document.querySelector("#myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  //   const formData = new FormData(e.target);
  const id = document.querySelector("#id").value;
  console.log(id);

  const getdata = async function () {
    try {
      const res = await fetch("test.json");
      const data = await res.json();
      let user = data.find((el) => el.user_id === id);
      console.log(user);
      if (user) {
        const xx = `${user.name} ${user.family_name} خوش آمدی`;

        html2pdf(xx);
      }
      result.textContent = `کاربری با این مشخصات یافت نشد`;
      if (!res.ok) throw new Error(`${data.message}${res.status}`);
    } catch (error) {
      console.log(error);
    }
  };

  getdata();
});

// var element = document.getElementById("element-to-print");
// html2pdf(element);
