document.querySelector("#myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  //   const formData = new FormData(e.target);
  const id = document.querySelector("#id").value;
  const result = document.querySelector(".result");
  console.log(id);

  const getdata = async function () {
    try {
      const res = await fetch("test.json");
      const data = await res.json();
      let user = data.find((el) => el.user_id === id);
      console.log(user);
      if (user) {
        return (result.textContent = `${user.name} ${user.family_name} خوش آمدی`);
      }
      result.textContent = `کاربری با این مشخصات یافت نشد`;
      if (!res.ok) throw new Error(`${data.message}${res.status}`);
    } catch (error) {
      console.log(error);
    }
  };

  getdata();
});
