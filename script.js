const eventDetails = {
    ganesh: {
        title: "🕉️ श्री गणेश पूजन",
        desc: "विवाह के प्रथम दिवस पर भगवान विघ्नहर्ता का आह्वान किया गया। यह रस्म परिवार की खुशहाली और निर्विघ्न शादी के लिए की जाती है।",
        deepInfo: "महत्व: गणेश जी को प्रथम पूज्य माना जाता है। उज्जैन की परंपरा के अनुसार, घर के मुख्य द्वार पर स्वस्तिक बनाया गया और कुलदेवता की पूजा की गई।",
        img: "https://images.unsplash.com/photo-1567591974574-e8627d70e28a?auto=format&fit=crop&w=800&q=80",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
    },
    haldi: {
        title: "💛 हल्दी उत्सव",
        desc: "स्नेह और पवित्रता का संगम।",
        deepInfo: "हल्दी की रस्म में 'तेल-बाण' का विशेष महत्व रहा। दूल्हे/दुल्हन को घर की सुहागिन महिलाओं ने उबटन लगाया।",
        img: "https://images.unsplash.com/photo-1595199833332-630f16373f6b?auto=format&fit=crop&w=800&q=80",
        video: ""
    },
    // Baaki events ke liye bhi aise hi details jodiye...
    lagan: {
        title: "🔥 शुभ लग्न (पाणिग्रहण)",
        desc: "जीवन भर के साथ का पवित्र संकल्प।",
        deepInfo: "अग्नि के साक्ष्य में सात फेरे और सात वचनों के साथ दाम्पत्य जीवन का आरंभ। उज्जैन के प्रकांड विद्वानों द्वारा मंत्रोच्चार के साथ रस्म संपन्न।",
        img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
        video: ""
    }
};

function openModal(type) {
    const data = eventDetails[type];
    const modal = document.getElementById('detailsModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <h1 style="color: #800000; font-family: 'Rozha One';">${data.title}</h1>
        <hr>
        <div class="row">
            <div class="col-md-6">
                <img src="${data.img}" class="modal-img">
            </div>
            <div class="col-md-6">
                <p style="font-size: 1.2rem;">${data.desc}</p>
                <div style="background: #fdf2f2; padding: 20px; border-radius: 10px; border-left: 5px solid #800000;">
                    <strong>गहरी जानकारी:</strong><br>${data.deepInfo}
                </div>
            </div>
        </div>
        <div class="mt-4">
            <h3>वीडियो दर्शन</h3>
            <iframe class="modal-video" src="${data.video}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('detailsModal').style.display = "none";
}

