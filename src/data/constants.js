import projectFlowImage from '../assets/images/projectFlow.png';
import prediksiNB from '../assets/images/prediksiNaiveBayes.png';
import bengkelMotorCLI from '../assets/images/manajemenBengkelCLI.png';
import ortodoxShhop from '../assets/images/ortodoxShop.png';
import siAlma from '../assets/images/sialma.png';
import maturPakWali from '../assets/images/maturpkwali.png';
import budiUtama from '../assets/images/budiutama.png';
import projectTestAPI from '../assets/images/projecttestapi.jpeg';
import projectFlowUI from '../assets/images/uiprojectflow.png';
import bemFasilkom from '../assets/images/bemfasilkom.png';
import lego from '../assets/images/lego.png';


export const Bio = {
  name: "Adi Bayu Saputra",
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Programmer",
  ],
  description:
    "As an Informatics student at Universitas Pembangunan Nasional 'Veteran' Jawa Timur, I have a strong interest and expertise in Full Stack Development, Data Analysis, and Computer Networks. With a solid academic foundation and practical experience, I am skilled at integrating technical abilities with analytical thinking to address various challenges in the tech industry.",
  resume:
    "https://drive.google.com/drive/folders/1MtbHgpK9ib4a2bNrXK2b0pFuqNBANrYY?usp=sharing",
  insta: "https://www.instagram.com/abay_saputrra/",
  WhatsApp: "https://wa.me/6285850503992",
  linkedin: "https://www.linkedin.com/in/adi-bayu-saputra-2b7840218/",
  github: "https://github.com/Abaysaputra",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Vue Js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Laravel",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/100px-Laravel.svg.png",//ubah linknya karena tidak bisa diakses
      },
      {
        name: "PHP Native",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1422px-PHP-logo.svg.png",
      },
    ],
  },
  {
    title: "UI/UX Designer",
    skills: [
      {
        name: "Figma",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/960px-Figma-logo.svg.png",
      }
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      }
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://budiutamamandiri.com/assets/images/logo3.0.webp",
    role: "Frontend Developer - Freelance",
    company: "CV. Budi Utama Mandiri",
    date: "Jan 2025 - Jun 2025",
    desc: "Menggunakan HTML, Boostrap, dan JavaScript . Di frontend aplikasi web yang di gunakan, serta PHP untuk mengelola navigasi Halaman dan API Saya juga menggunakan JQuery untuk mengelola interaksi pengguna dan membuat aplikasi web yang responsif.",
    skills: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "JQuery",
      "JavaScript",
    ],
    doc: budiUtama,
  },
  {
    id: 1,
    img: "https://bojonegorokab.go.id/portal/assets/img/logo-kabupaten.png",
    role: "Full Stack Developer - Internship",
    company: "Dinas Perputakaan dan Kearsipan Kabupaten Bojonegoro",
    date: "Jan 2025 - Feb 2025",
    desc: "Mengembangkan aplikasi untuk alih media buku fisik ke digital, menggunakan Vue.js sebagai framework untuk frontend, Laravel untuk backend, dan MySql sebagai database.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
    doc: siAlma,

  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRoUmTg04U8sXpjadL1XMBnWx6h2kDxw5Og&s",
    role: "Community Service Division Staff",
    company: "BEM FASILKOM UPN Veteran Jawa Timur",
    date: "Apr 2024 - Apr 2025",
    desc: "Melalui peran strategis di Divisi Pengabdian Masyarakat, saya secara aktif mengaplikasikan dan mengasah berbagai keterampilan. Saya mempraktikkan manajemen proyek dan perencanaan acara dengan mengelola kegiatan dari konsep hingga selesai. Kemampuan kerja tim dan komunikasi menjadi kunci dalam berkolaborasi dengan anggota divisi dan mitra eksternal. Selain itu, saya juga berkontribusi pada proyek teknis yang menantang kemampuan problem-solving saya dalam konteks sosial yang nyata.",
    skills: [
      "Leadership",
      "Public Speaking",
      "Time Management",
      "Teamwork",
      "Problem Solving",
      "Communication",
      "Adaptability",
      "Critical Thinking",
      "Project Management",
      "Event Planning",
      "Networking",
      "Community Engagement",
      "Volunteering",
    ],
    doc: bemFasilkom,
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRoUmTg04U8sXpjadL1XMBnWx6h2kDxw5Og&s",
    role: "Chief Executive of the Abdi Desa FASILKOM LEGO 2024",
    company: "BEM FASILKOM UPN Veteran Jawa Timur",
    date: "Nov 2024 - Nov 2024",
    desc: "Sebagai Pemimpin Program Abdi Desa di Mojokerto, saya bertanggung jawab memimpin inisiatif pemberdayaan masyarakat yang berfokus pada teknologi dan pendidikan. Tugas utama yang saya dan tim jalani mencakup digitalisasi UMKM, pengembangan situs web desa, pelestarian pariwisata lokal, pengajaran desain grafis di sekolah dasar, serta mengorganisir berbagai acara komunitas untuk memperkuat kebersamaan warga. Peran ini secara keseluruhan telah mengasah keterampiidisilan saya dalam kepemimpinan, manajemen proyek, dan keterlibatan komunitas dalam sebuah lingkungan yang nyata dan multplin.",
    skills: [
      "Leadership",
      "Project Management",
      "Community Engagement",
      "Digital Literacy",
      "Web Development",
      "Graphic Design",
      "Event Planning",
      "Public Speaking",
      "Team Collaboration",
      "Problem Solving",
      "Time Management",
      "Adaptability",
      "Communication",
      "Cultural Awareness",
      "Entrepreneurship",
      "Social Media Management",
      "Data Analysis",
    ],
    doc: lego,
  },
  {
    id: 4,
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQFmN9fTWdxDfA/company-logo_200_200/B4DZTVEEoLGkAM-/0/1738741402588?e=1756944000&v=beta&t=1kCrrX0WPd2UynkGI3bdyHaDfIpsLcw9sC2QHSa6j2s",
    role: "Web Developer - Internship",
    company: "Synergic Digitals",
    date: "Jan 2022 - Apr 2022",
    desc: "Peran desain antarmuka pengguna (UI) melibatkan penciptaan dan perancangan elemen visual serta tata letak produk digital atau aplikasi. Desainer UI berfokus pada pembuatan antarmuka yang ramah pengguna dan menarik secara visual untuk meningkatkan pengalaman pengguna. Tugas mereka meliputi perancangan tombol, menu, ikon, dan estetika keseluruhan untuk memastikan pengguna dapat berinteraksi dengan produk secara mudah dan intuitif. Pada dasarnya, desain UI memainkan peran krusial dalam membuat antarmuka digital yang menarik secara visual, fungsional, dan berpusat pada pengguna.",
    skills: [
      "UI/UX",
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDwiXIU7GM1RJs8LnvrCNdkjMpnIblvLAZQ&s",
    school: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
    date: "2023 - 2027 (Semester-5)",
    grade: "3.91 Index Prestasi",
    desc: "Saat Ini saya lagi melanjutkan pendidikan di Universitas Pembangunan Nasional 'Veteran' Jawa Timur dengan jurusan Informatika (Semester 5). Saya telah mempelajari berbagai konsep dan teknologi dalam bidang pengembangan perangkat lunak, termasuk pemrograman web, basis data, dan desain antarmuka pengguna. Saya juga aktif terlibat dalam proyek-proyek pengembangan aplikasi dan berpartisipasi dalam kegiatan organisasi kampus.",
    degree: "Informatika",
  },
  {
    id: 1,
    img: "https://www.smknegeripurwosaribjn.sch.id/wp-content/uploads/2018/07/Logo-SMK-Negeri-Purwosari.png",
    school: "SMK Negeri Purwosari",
    date: "2020 - 2023",
    grade: "88.2%",
    desc: "Saya telah menyelesaikan pendidikan di SMK Negeri Purwosari dengan jurusan Rekayasa Perangkat Lunak (RPL). Selama di SMK, saya telah mempelajari berbagai konsep dan teknologi dalam pengembangan perangkat lunak, termasuk pemrograman web, basis data, dan desain antarmuka pengguna. Saya juga aktif terlibat dalam proyek-proyek pengembangan aplikasi dan berpartisipasi dalam kegiatan organisasi sekolah.",
    degree: "Rekayasa Perangkat Lunak (RPL)",
  },
  {
    id: 2,
    img: "https://pbs.twimg.com/profile_images/934332932256292864/rCZ4qYoF_400x400.jpg",
    school: "SMP Negeri 1 Gayam",
    date: "Apr 2017 - Apr 2020",
    grade: "92.3%",
    desc: "Saya telah menyelesaikan pendidikan di SMP Negeri 1 Gayam. Selama di SMP, saya telah mempelajari berbagai mata pelajaran dasar dan mengembangkan keterampilan sosial serta kepemimpinan melalui partisipasi dalam kegiatan ekstrakurikuler. Saya juga aktif terlibat dalam kegiatan organisasi sekolah dan berpartisipasi dalam kegiatan ekstrakurikuler.",
    degree: "Reguler",
  },
];

export const projects = [
  {
    id: 9,
    title: "Matur Pak Wali",
    date: "Jun 2025",
    description:
      "Aplikasi ini merupakan aplikasi pengaduan masyrakat yang dikhususukan untuk wilayah Surabaya dan sekitarnya. Aplikasi ini dibuat untuk memudahkan masyarakat dalam mengadukan keluhan mereka kepada pemerintah kota Surabaya. Aplikasi ini juga dilengkapi dengan fitur peta untuk memudahkan masyarakat dalam menemukan lokasi pengaduan mereka. Aplikasi ini juga dilengkapi dengan fitur chat untuk memudahkan masyarakat dalam berkomunikasi dengan pemerintah kota Surabaya. Aplikasi ini juga dilengkapi dengan fitur notifikasi untuk memudahkan masyarakat dalam mengetahui status pengaduan mereka. Aplikasi ini juga dilengkapi dengan fitur statistik untuk memudahkan masyarakat dalam mengetahui jumlah pengaduan yang masuk dan jumlah pengaduan yang sudah ditangani.",
    image:
      maturPakWali,
    tags: [
      "PHP Native",
      "Java Script",
      "MySQL",
      "HTML",
      "Bootstrap",
      "JQuery"
    ],
    category: "web app",
    github: "https://github.com/Abaysaputra/matur-pak-wali.git",
    webapp: "0#",
  },
  {
    id: 0,
    title: "Si Alma (Sistem Alih Media)",
    date: "Jan 2025",
    description:
      "Aplikasi ini merupakan aplikasi alih media buku fisik ke digital yang dibuat untuk Dinas Perpustakaan dan Kearsipan Kabupaten Bojonegoro. Aplikasi ini dibuat menggunakan Vue.js sebagai framework untuk frontend, Laravel untuk backend, dan MySql sebagai database. Aplikasi ini juga dilengkapi dengan fitur upload file, download file, dan pencarian file.",
    image:
      siAlma,
    tags: ["Vue JS", "MySQL", "Laravel", "Tailwind CSS", "PHP"],
    category: "web app",
    github: "0#",
    webapp: "0#",
    member: [
      {
        name: "Adi Bayu Saputra",
        img: "https://avatars.githubusercontent.com/u/96931857?s=400&u=7a33a49c77a73d03aa6f1f645e63f2eac8d5fd02&v=4",
        linkedin: "https://www.linkedin.com/in/adi-bayu-saputra-2b7840218/",
        github: "https://github.com/Abaysaputra",
      },
      {
        name: "Moch. Dani Ferdinan Saputra",
        img: "https://media.licdn.com/dms/image/v2/D5603AQHJEVMlcCWj9Q/profile-displayphoto-shrink_400_400/B56ZQ_4mreHIAk-/0/1736238591718?e=1757548800&v=beta&t=1YJuxe6sV8C0aH2TLXyvvyf6c9uEHs9BTInVgYPZNao",
        linkedin: "https://www.linkedin.com/in/moch-dani-ferdian-saputra-291498283/",
        github: "https://github.com/danfsaputra",
      },
    ],
  },
  {
    id: 1,
    title: "CV Budi Utama Mandiri",
    date: "Jan 2025",
    description:
      "Aplikasi ini merupakan aplikasi web yang dibuat untuk CV Budi Utama Mandiri. Aplikasi ini dibuat menggunakan HTML, Boostrap, dan JavaScript. Aplikasi ini juga dilengkapi dengan fitur navigasi halaman dan API menggunakan PHP. Aplikasi ini juga dilengkapi dengan fitur responsif untuk memudahkan pengguna dalam mengakses aplikasi ini di berbagai perangkat.",
    image:
      budiUtama,
    tags: [
      "Bootstrap",
      "JavaScript",
      "PHP",
      "JQuery",
      "Responsive Design",
      "SEO Optimization",
      "Cross-Browser Compatibility",
    ],
    category: "web app",
    github: "0#",
    webapp: "https://budiutamamandiri.com/",
  },
  {
    id: 2,
    title: "Project Flow Kreotek (on Progress)",
    date: "Jun 2025",
    description:
      "Aplikasi ini merupakan aplikasi web Project Flow, ToDoList, untuk start-up Kreotek Inova Digital. Aplikasi ini dibuat menggunakan React JS, Tailwind CSS, dan Node JS. Aplikasi ini juga dilengkapi dengan fitur login, register, dan dashboard untuk mengelola proyek. Aplikasi ini juga dilengkapi dengan fitur notifikasi untuk memudahkan pengguna dalam mengetahui status proyek.",
    image: projectFlowImage,
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "web app",
    github: "0#",
    webapp: "https://github.com/Abaysaputra/ProjectFlowKreotek.git",
    member: [
      {
        name: "Adi Bayu Saputra",
        img: "https://avatars.githubusercontent.com/u/96931857?s=400&u=7a33a49c77a73d03aa6f1f645e63f2eac8d5fd02&v=4",
        linkedin: "https://www.linkedin.com/in/adi-bayu-saputra-2b7840218/",
        github: "https://github.com/Abaysaputra",
      },
    ],
  },
  {
    id: 3,
    title: "Data Science Prediction App",
    date: "Januari 2025",
    description:
      "Aplikasi prediksi menggunakan algoritma Naive Bayes untuk menganalisis dataset, menghitung prior dan likelihood, serta melakukan validasi model. Termasuk fitur visualisasi data untuk membantu analisis dan presentasi hasil prediksi. Cocok untuk analisis data statistik dan keputusan bisnis.",
    image: prediksiNB,
    tags: ["Python", "Naive Bayes", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    category: "machine learning",
    github: "https://github.com/Abaysaputra/data-visualization-nb.git",
    webapp: "0#",
  },
    {
    id: 4,
    title: "Ortodox Shopping App (on Progress)",
    date: "Juli 2025",
    description:
      "Aplikasi ini merupakan aplikasi belanja online yang dibuat menggunakan React Native. Aplikasi ini juga dilengkapi dengan fitur login, register, dan dashboard untuk mengelola produk. Aplikasi ini juga dilengkapi dengan fitur notifikasi untuk memudahkan pengguna dalam mengetahui status pesanan. Aplikasi ini juga dilengkapi dengan fitur keranjang belanja untuk memudahkan pengguna dalam berbelanja. Aplikasi ini juga dilengkapi dengan fitur pembayaran menggunakan Midtrans. Aplikasi ini juga dilengkapi dengan fitur chat untuk memudahkan pengguna dalam berkomunikasi dengan penjual.",
    image: ortodoxShhop,
    tags: ["React JS", "React Native", "Tailwind CSS", "Midtrans", "Laravel", "MySQL", "PHP", "JQuery"],
    category: "web app",
    github: "https://github.com/Ferrrdy/ortodox-origin.git",
    webapp: "0#",
  },
  {
    id: 10,
    title: "Bengkel Motor CLI",
    date: "Jun 2025",
    description:
      "Ini merupakan aplikasi berbasi CLI untuk manajemen Bengkel Motor, didalamnya ada fitur Kelola Pelanggan, Kelola Kendaraan, Kelola untuk servis, Kelola Teknisi, Transaks Suku Cadang, Kelola Pembayaran, serta terdapat fitur untuk Laporan keuangan, Riwayat Transaksi, dan yang terakhir bisa generate laporan dalam bentu file csv.",
    image:
      bengkelMotorCLI,
    tags: ["C++", "CLI", "File I/O", "Data Structures", "Algorithms"],
    category: "android app",
    github: "https://github.com/Abaysaputra/manajemen-bengkel-motor.git",
    webapp: "0#",
  },
    {
    id: 11,
    title: "Project Test API React",
    date: "Jul 2025",
    description:
      "Ini merupakan website yang saya buat waktu test untuk intern di PT. Suitmedia pada program magang berdampak, terdapat beberapa soal yang diberikan salah satunya yaitu API Consumn untuk card.",
    image:
      projectTestAPI,
    tags: ["React Js", "Tailwind CSS", "API", "Data Structures", "GIT"],
    category: "web app",
    github: "https://github.com/Abaysaputra/project-test-adi-bayu-saputra.git",
    webapp: "https://project-test-adi-bayu-saputra.vercel.app",
  },
    {
    id: 12,
    title: "Project Flow UI/UX",
    date: "Jan 2025",
    description:
      "Design UI/UX mobile apps Project Flow Management, aplikasi ini merupakan aplikasi untuk manajemen proyek. Aplikasi ini dibuat menggunakan Flutter, untuk UI/UX dibuat menggunakan Figma. Aplikasi ini dilengkapi dengan fitur login, register, dan dashboard untuk mengelola proyek. Aplikasi ini juga dilengkapi dengan fitur pencarian proyek, pengaturan profil, dan pengaturan proyek. Aplikasi ini juga dilengkapi dengan fitur notifikasi untuk memudahkan pengguna dalam mengetahui status proyek.",
    image:
      projectFlowUI,
    tags: ["UI/UX", "Figma", "Design", "Coolors"],
    category: "web app",
    github: "https://www.figma.com/design/JhTcnYHqFYetoneIgfvieX/Task-Manager?node-id=286-2073&t=RNIzWz1YzNF3MkZE-1",
    webapp: "0#",
  },

];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
