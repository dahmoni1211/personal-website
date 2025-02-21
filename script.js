const contentData = {
    "profile": "Aspiring cybersecurity professional with expertise in reverse engineering, ethical hacking, and GRC.",
    "education": "Bachelor's in Information Technology, King Abdulaziz University (Expected Graduation: 2025).",
    "experience": `
        <ul>
            <li>Saudi Electricity Company - Summer Intern (June 2024 - August 2024)</li>
            <li>Habib Trading Company - Administrative Assistant (July 2021 - June 2023)</li>
        </ul>
    `,
    "skills": `
        <ul>
            <li>Ethical Hacking & Penetration Testing</li>
            <li>Cybersecurity Analysis</li>
            <li>Kali Linux System</li>
            <li>Python and Java Programming</li>
            <li>Excel and Microsoft Office</li>
        </ul>
    `,
    "certifications": `
        <ul>
            <li>Ethical Hacking (Udemy)</li>
            <li>Cybersecurity Foundations (Udemy)</li>
            <li>Reverse Engineering Training (CyberHub)</li>
            <li>GRC Training Program (Ongoing)</li>
        </ul>
    `,
    "contact": `
        <p>Phone: <a href="tel:+966531931314">+966 53 193 1314</a></p>
        <p>Email: <a href="mailto:abdalrhmn998877@gmail.com">abdalrhmn998877@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/abdulrahman-alobaisi-3150132b4" target="_blank">Abdulrahman Alobaisi</a></p>
    `
};

function showModal(section) {
    document.getElementById('modal-title').innerText = section.toUpperCase();
    document.getElementById('modal-body').innerHTML = contentData[section];
    let modal = document.getElementById('modal');
    modal.classList.add('show');
}

function closeModal() {
    let modal = document.getElementById('modal');
    modal.classList.remove('show');
}