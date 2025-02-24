document.addEventListener("DOMContentLoaded", function () {
    let students = [];

    function fetchAndDecode(file) {
        return fetch(file)
            .then(response => response.text())
            .then(encodedData => {
                try {
                    let jsonString = atob(encodedData.trim()); // Decode base64
                    return JSON.parse(jsonString);
                } catch (error) {
                    console.error("Decoding failed for:", file, error);
                    return [];
                }
            })
            .catch(error => {
                console.error("Fetching failed for:", file, error);
                return [];
            });
    }

    // Load both student files
    Promise.all([fetchAndDecode("students23.txt"), fetchAndDecode("students24.txt")])
        .then(data => {
            students = [...data[0], ...data[1]]; // Combine both batches
        });

    window.checkCGPA = function () {
        let regNo = document.getElementById("regInput").value.trim();
        let resultDiv = document.getElementById("cgpaResult");

        if (regNo === "") {
            resultDiv.innerHTML = "";
            return;
        }

        let student = students.find(s => s["Reg.No"].toString() === regNo);
        if (student) {
            resultDiv.innerHTML = `
                <p><strong>Name:</strong> ${student.Name}</p>
                <p><strong>Section:</strong> ${student.Section}</p>
                <p><strong>CGPA:</strong> ${student.CGPA}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p style="color: red;">Enter Full Reg. No</p>`;
        }
    };
});
