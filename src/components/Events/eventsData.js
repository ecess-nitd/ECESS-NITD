const eventsData = [
    {
        id: 0,
        image: '/exordium2025.jpg',
        title: 'Exordium 2.0',
        description: `Your gateway to ECE - An exclusive event designed to meet faculty, explore research, discover innovative projects, understand the ECE curriculum, learn about ECE advancements, and participate in Q&A sessions.`,
        modaldescription: `Welcome to EXORDIUM 2.0 - Your Gateway to ECE! This exclusive event is designed for students to explore the vast opportunities in Electronics and Communication Engineering. Join us to meet distinguished faculty members, explore cutting-edge research, discover innovative projects, understand the comprehensive ECE curriculum, learn about the latest advancements in the field, and participate in interactive Q&A sessions. This is your chance to get a comprehensive overview of what makes ECE at NIT Durgapur special and how you can be part of this exciting journey in technology and innovation.`,
        date: `17th February, 2025`,
        time: `6PM onwards`,
        venue: `Auditorium 2, ECE Department`
    },
    {
        id: 1,
        image: '/innovacion.jpg',
        title: 'Innovacion',
        description: `Explore Embedded Systems, IoT, and Automation in this comprehensive hands-on experience. Get exclusive free access, work on multiple projects, dive into microcontrollers, simulate and test projects on Tinkercad, earn E-certificates, and take your first step towards embedded systems and IoT.`,
        modaldescription: `Welcome to INNOVACION - your gateway to the future of technology! This exciting event focuses on Embedded Systems, IoT, and Automation, offering participants an exclusively free hands-on experience. Work on several projects crafted just for you, dive deep into microcontrollers, and get practical experience by simulating and testing projects on Tinkercad before hardware implementation. Earn valuable E-certificates by attending the full event, marking your first step towards embedded systems and IoT - a standout addition to your CV. No pre-requisite knowledge required! Join us for this comprehensive exploration of cutting-edge technology that's shaping our world.`,
        date: `3rd - 4th April, 2025`,
        time: `6PM onwards`,
        venue: `ECE Department`
    },
    {
        id: 2,
        image: 'https://i.imgur.com/oLrJAu0.jpeg',
        title: 'Exordium',
        description:`This is an exclusive introductory event for first-year students in the Electronics and Communication 
                    Engineering (ECE) department, designed to showcase the department's opportunities and innovations. 
                    It aims to familiarize newcomers with the department's cutting-edge research and technological 
                    advancements.`,
        modaldescription:`Attention Future Innovators! Step into the dynamic realm of Electronics and Communication Engineering (ECE) and embrace the vast opportunities that await you in this transformative field. ECE stands at the forefront of technological evolution, shaping the global landscape with innovations that redefine how we communicate, compute, and connect. Introducing 'EXORDIUM' – a bespoke event crafted exclusively for first-year students like you. This event isn't just an introduction; it's a gateway to an exciting journey in ECE, where you'll delve into cutting-edge research, explore the intricacies of digital systems, telecommunications, and more. 'EXORDIUM' promises to unravel the limitless possibilities within the department, offering insights into futuristic technologies like AI, IoT, and robotics, and providing a platform to engage with esteemed faculty and peers who are pioneering breakthroughs. Get ready to be inspired, equipped, and empowered to embark on a path that leads to groundbreaking discoveries, technological advancements, and contributions to shaping the future of technology.`, 
        date: `21st March, 2024`,
        time: `6pm`,
        venue: `Auditorium 2, ECE dept`
    },
    {
        id: 3,
        image: 'https://i.imgur.com/yhJ5Z0x.jpeg',
        title: 'VLSI Workshop',
        description:`ECESS, NIT Durgapur is organizing a 4-day VLSI (Very Large Scale Integration) workshop that requires 
                     no prior knowledge. This workshop offers a unique opportunity to learn about the technology that 
                     revolutionized computing by integrating thousands of transistors into a single chip, making modern, 
                     compact, and powerful devices possible.`,
        modaldescription:`"Learning never exhausts the mind." - Leonardo da Vinci. Have you ever wondered that the first computer in the world was over 50 feet (15 meters) long, weighed five tons, and consisted of about 750,000 separate parts? Today, our phones are much smaller and can perform far more tasks, thanks to VLSI (Very Large Scale Integration). VLSI is the process of creating an integrated circuit (IC) by combining thousands of transistors into a single chip, making powerful yet compact devices like microprocessors possible. If this fascinating field interests you, ECESS at NIT Durgapur is offering a 4-day VLSI workshop, open to all with no prior knowledge required. This workshop will cover the basics of VLSI, explain integrated circuit design and manufacturing, and showcase how this technology has revolutionized modern electronics. Don't miss this opportunity to delve into one of the most exciting and impactful areas of engineering and technology. Join the VLSI workshop at NIT Durgapur and start your journey into the world of VLSI.`, 
        date: `5th-6th & 17th-19th April 2023`,
        time: `6pm`,
        venue: `EC31, 3rd floor, ECE dept`
    },    
    {
        id: 4,
        image: 'https://i.imgur.com/xWTO9hf.jpeg',
        title: 'Tech Talk',
        description:`The talkshow featuring Harsh Dokania, an accomplished alumnus of NIT Durgapur and current Qualcomm professional,
                    offers insights into placement, corporate life, post-college experiences for Electronics and Communication students 
                    and provide valuable guidance and motivation for students aiming to excel in their careers.`,
        modaldescription:`"We believe in the power of perseverance and the pursuit of dreams," - Nelson Mandela's timeless words resonate deeply as we proudly introduce Harsh Dokania, an illustrious alum of the National Institute of Technology Durgapur. With a stellar academic background in Electronics and Communication, Harsh has embarked on a remarkable career journey at Qualcomm, a testament to his dedication and expertise in the field. It is with great honor that we welcome Harsh as our esteemed guest on the upcoming talk show, where he will illuminate us with his invaluable experiences and insights into placements, corporate life, and the journey post-college. As the Electronics and Communication Students Society, we are excited to offer our members and aspiring engineers a unique opportunity to glean inspiration and guidance from Harsh's journey, fostering a community of learning and growth in our pursuit of excellence.`,
        date: `9th September, 2023`,
        time: `11am`,
        venue: `Online`
    },
    {
        id: 5,
        image: 'https://i.imgur.com/jLKspxt.jpeg',
        title: 'Alumni Talkshow',
        description:`Talkshow featuring Mr. Sai Vara Prasad Bolloju, a distinguished alumnus currently employed at Qualcomm. The event provided 
                    students with insights into building a successful career in the semiconductor industry and help them network with a professional 
                    who has navigated the path from academia to a thriving career in a leading technology company.`,
        modaldescription:`We are thrilled to announce a special Alumni Talk organized by the Electronics and Communication Engineering Students Society, featuring Mr. Sai Vara Prasad Bolloju, a distinguished professional currently making significant strides at Qualcomm. This insightful event is dedicated to exploring the intricacies of building a successful career in the semiconductor industry. Mr. Bolloju, with his extensive experience and expertise, will share invaluable perspectives on navigating the complexities of this rapidly evolving field. We extend a warm invitation to all students and enthusiasts eager to delve into the world of semiconductors, offering a unique opportunity to learn from our esteemed alum. Join us as we uncover the secrets to thriving in the semiconductor industry and forge connections that can shape your future.`,
        date: `17th December, 2022`, 
        time: `7:00pm`,
        venue: `Online`
    },
    {
        id: 6,
        image: 'https://i.imgur.com/BRi3oMq.jpeg',
        title: 'Invited Talk',
        description:`A talkshow by Dr. Karan Nathwani, an expert in speech processing, has experience working in France, UK and India on speech 
                    enhancement, recognition and underwater signal processing. on the topic of "Speech Intelligibility Improvement in Realistic 
                    Noisy Environments. This is a great opportunity to learn from a leading researcher in the field.`,
        modaldescription:`Excited to delve into the world of cutting-edge research! The Electronics and Communication Engineering Student's Society (ECESS) proudly presents a captivating talk by Dr. Karan Nathwani, currently serving as Assistant Professor in the Department of Electrical Engineering at IIT Jammu. With a stellar academic journey that includes postdoctoral research at Telecom ParisTech and Inria-Nancy in France, as well as a tenure as a research scientist at Oxford University, UK, Dr. Nathwani brings profound expertise in speech enhancement, pathology, intelligibility improvement, speech recognition, underwater signal processing, Machine Learning, and Artificial Intelligence. Join us for this enlightening seminar where Dr. Nathwani will share insights into his groundbreaking work on Speech Intelligibility Improvement in Realistic Noisy Environments. We extend a warm invitation to all enthusiasts and students alike to enrich your knowledge and engage with one of the foremost experts in the field. Your presence will be highly valued as we embark on this enlightening journey together.`,
        date: `5th August, 2022`,
        time: `3:30pm`,
        venue: `SL 31, ECE Department, NIT DURGAPUR`
    },
    {
        id: 7,
        image: 'https://i.imgur.com/1hMJMFX.jpeg',
        title: 'PCB Design Workshop',
        description:`A two-day workshop focused on Printed Circuit Board design. It aims to teach participants about the various components of a 
                    PCB board, how to simulate circuits, how to convert those simulations into a PCB layout using EDA tools. This hands-on 
                    experience will provide foundational knowledge for anyone interested in electronics and PCB design.`,
        modaldescription:`"THE EXPERT IN ANYTHING WAS ONCE A BEGINNER" People of all backgrounds and interests, are you ready to explore the fascinating realm of printed circuit boards (PCBs)? Join us at the Electronics and Communication Engineering Student's Society for a transformative two-day workshop on PCB design, happening on January 29th and 30th, 2022. Whether you're curious about the inner workings of consumer electronics or eager to master the art of PCB layout from scratch using advanced EDA tools, this workshop is your gateway. Discover the intricacies of PCB components, simulate circuits, and turn your designs into reality. Don't miss this chance to expand your knowledge and skills in electronics. Register now through the provided link and embark on a journey towards unlocking the true potential of electronics with us!`,
        date: `29th & 30th January, 2022`,
        time: `4pm`,
        venue: `Online`
    },
    {
        id: 8,
        image: 'https://i.imgur.com/cRLtPvh.png',
        title: 'Signals Decoded',
        description:`A workshop and seminar focusing on Signal Processing using MATLAB, along with an exclusive session on the Emergence of Graphs 
                    and Natural Language Processing (NLP). Participants will learn how to utilize MATLAB, and provide in-depth knowledge and practical 
                    skills in signal processing and explore the latest advancements in graphs and NLP.`,
        modaldescription:`The Electronics and Communication Engineering Student's Society (ECESS) at NIT Durgapur, in collaboration with IEEE Student Branch NIT Durgapur, is excited to present "Signals Decoded": a transformative workshop and seminar designed to delve deep into Signal Processing using MATLAB, and an insightful exploration into the Emergence of Graphs and Natural Language Processing (NLP). MATLAB stands as a cornerstone in the realms of programming and numeric computation, empowering engineers and scientists worldwide to analyze data, develop sophisticated algorithms, and construct predictive models. This event welcomes students from all academic disciplines and years to participate, offering a unique opportunity to enhance their skills and broaden their understanding of these cutting-edge technologies. Join us for an enlightening experience that promises to enrich your academic journey and expand your horizons in the fields of engineering and computational sciences. We eagerly await your participation in "Signals Decoded"!`,
        date: `4th & 5th December, 2021`,
        time: `3pm`,
        venue: `Online`
    },
    {
        id: 9,
        image: 'https://i.imgur.com/7j7d8aB.jpeg',
        title: 'VLSI Workshop',
        description:`A workshop  designed to introduce participants to the fundamental concepts of Very-Large-Scale Integration (VLSI) and Digital Hardware 
                    Design, with a focus on RTL (Register Transfer Level) and Verilog. It is ideal for enthusiasts looking to delve into the field of VLSI 
                    design, providing both theoretical knowledge and practical skills`,
        modaldescription:`Ever wondered how millions of transistors are intricately woven together onto a single chip to create the marvels of modern technology? Very-large-scale integration (VLSI) is the pioneering process that achieves this feat, enabling the integration of thousands of transistors into a compact integrated circuit (IC). These VLSI circuits are ubiquitous in our daily lives, powering everything from smartphones and computers to medical devices and automotive systems, revolutionizing industries and enhancing functionality.With this in mind, the Electronics and Communication Engineering Student's Society at NIT Durgapur proudly presents "VLSI: Digital Design Workshop". This workshop aims to introduce participants to the fundamental concepts of VLSI and Digital Hardware Design, alongside learning RTL-Verilog—a pivotal language in VLSI design. Worried about practical applications? Fear not! The workshop includes hands-on sessions where you'll delve into the design of combinational and sequential systems using cutting-edge VLSI technology.Participants are encouraged to have a basic understanding of Logic Gates and K-Maps as prerequisites for this workshop. By the end of these engaging two days, attendees will not only gain practical insights into VLSI design but also receive a Certificate of Completion, validating their newfound skills and knowledge in this transformative field of electronics.`,
        date: `10th & 11th April 2021`,
        time: `5pm`,
        Mode: `Online`
    },
    {
        id: 10,
        image: 'https://i.imgur.com/1ifl3fy.jpeg',
        title: 'Placement Talk',
        description:`This event offers comprehensive insights into the placement process, covering eligibility criteria, required skills, an overview of 
                    participating companies, and details about offered salaries. Participants will gain valuable information to enhance their readiness and 
                    confidence for securing desirable job opportunities in their field.`,
        modaldescription:`Ever found yourself nervous about the upcoming placements? Wondering how to navigate through the process or what skills are crucial for success? The Electronics and Communication Engineering Students' Society (ECESS) is here to address all your uncertainties this Republic Day with our exclusive event, "Placement Talks". This initiative aims to provide comprehensive insights into every aspect of the placement journey—from understanding the prerequisites and honing essential skills to gaining a clear understanding of the participating companies and the competitive landscape. With campus placements spanning throughout the fourth year, this event offers a prime opportunity to equip yourself with the knowledge and confidence needed to secure your dream job. Join us for an informative session that promises to empower you and set you on the path to a successful career.` ,
        date : `26th January, 2021 (Tuesday)`,
        time : `5:15 pm`,
        venue: `Online`
    },
    {
        id: 11,
        image: 'https://i.imgur.com/WwxWzgJ.jpeg',
        title: 'Embedded Systems Workshop',
        description:`It provided a comprehensive introduction to embedded systems,where  Participants will learn about microprocessors, microcontrollers, 
                    sensors, and their practical applications. This includes hands-on experience using simulation software to design, simulate, and prototype 
                    circuits resembling commercially available products.`,
        modaldescription:`Embedded systems are the hidden heroes powering countless devices we rely on daily, from medical equipment to home appliances. At Electronics and Communication Engineering Student's Society (ECESS), NIT Durgapur, we're passionate about demystifying these technologies. Beyond the basics of microprocessors and sensors, our workshop delves into real-world applications, teaching you how to simulate and design circuits that mirror what's used in today's tech landscape. Imagine gaining hands-on experience that translates directly into understanding how your favorite gadgets function. Whether you're considering a career in electronics or just eager to explore, our workshop offers a gateway to practical knowledge and skills. Join us to uncover the secrets of embedded systems—your journey starts here!`,
        date: `13th & 14th March, 2021`,
        time: `5pm`,
        venue: `Online`
    }
];

export default eventsData;