:root {
    --gold: #D4AF37;
    --dark: #1a1a1a;
    --white: #ffffff;
}

body {
    margin: 0;
    font-family: 'Playfair Display', serif;
    background-color: #f9f6f2;
    color: var(--dark);
    scroll-behavior: smooth;
}

/* Hero Section with Parallax feel */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                url('https://images.unsplash.com/photo-1519741497674-611481863552') center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--white);
}

.hero h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 5rem;
    margin-bottom: 10px;
}

/* Section Styling */
.section-title {
    text-align: center;
    font-size: 3rem;
    margin-top: 80px;
    color: var(--gold);
}

/* Timeline/Deep Section */
.story { padding: 50px 20px; max-width: 800px; margin: auto; }

.timeline-item {
    border-left: 2px solid var(--gold);
    padding: 20px 40px;
    position: relative;
    margin-bottom: 20px;
}

.timeline-item::before {
    content: '❤';
    position: absolute;
    left: -12px;
    top: 25px;
    background: #f9f6f2;
    color: var(--gold);
}

/* Grid for Events */
.event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 50px;
}

.card {
    background: white;
    padding: 40px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: transform 0.3s;
}

.card:hover { transform: translateY(-10px); }

.btn {
    background: var(--gold);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}

