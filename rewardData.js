let tableBody = document.getElementById("tableBody");

async function code() {
  const main = await fetch(
    "https://script.googleusercontent.com/a/macros/navgurukul.org/echo?user_content_key=AehSKLigI2dVdSFTpqOBDfh4Qa5UrpgMQ66Ko-x2o9RzSw3G9HXSOZW-tsMGT0iHPOUVo_uSVuaoahsYpHJIAGzlcCdyBX_Ovxv9L7lb4l6UAkkAw_ukr9zFVJx7D8Rw5pCiw702-JOqGEcN1fOou1xK4g-_dHgI4py4lmCQ7IpaCjAJ96i_QwOqnKlm5xXoXQXcrbo3kXwNslmbdTbhp8UuCk57SqFfkeI9k2pszNm684-bEBN7iKgAEx0cIZokav3xfJj_k0d1y9m9uPWhCdShqKKUzLe2E-y1lPZwhE3Pb3WjR7lYWlldG48EEWF9jg&lib=MU4IK1_Yy3-1l7a8qqU3dYlOOlnTwNRiP"
  );

  const data = await main.json();
  console.log(data);

  let studentData = "";

  data.forEach(function (student) {
    studentData += `
      <tr>
        <td>${student["Students Name"]}</td>
        <td>${student["House Name "]}</td>
        <td>${student["Campus Name "]}</td>
        <td>${student["Additional Effort (+1)"]}</td>
        <td>${student["Supporting a Smaller Group in Learning (+2)"]}</td>
        <td>${student["Supporting a Smaller Group in Learning (+3)"]}</td>
        <td>${student["Support by Taking a Session for a Large Group (+4)"]}</td>
        <td>${student[ "Total Academic Points "]}</td>
        <td>${student["Additional Efforts in Life Skills (+1)"]}</td>
        <td>${student[  "Supporting Peers in Life Skills (+2)"]}</td>
        <td>${student["Supporting the Community in Life Skills (+4)"]}</td>
        <td>${student["Efforts to Learn English (+2)"]}</td>
        <td>${student["Competition Winners (Group) (+5)"]}</td>
        <td>${student["Council Activeness (+2)"]}</td>
        <td>${student["Solving a Problem (+3)"]}</td>
        <td>${student[" Task Winners (Individual) (+2)"]}</td>
        <td>${student["Getting a Job: (+15)"]}</td>
        <td>${student["Total Culture Points "]}</td>
        <td>${student["Total of Academic and Culture"]}</td>
      </tr>
    `;
  });

  tableBody.innerHTML = studentData;
}

code();


