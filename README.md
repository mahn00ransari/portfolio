
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Paws & Claws | Pet Salon</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
:root{--primary:#ff6b8b;--secondary:#4e65ff;--accent:#ffd166;--dark:#2d3748;--light:#f7fafc;--gray:#718096}
*{box-sizing:border-box;margin:0;padding:0;font-family:Poppins,sans-serif}html{scroll-behavior:smooth}body{color:var(--dark);background:var(--light);line-height:1.6}
header{position:sticky;top:0;background:white;box-shadow:0 2px 10px #0000000d;z-index:10}.nav-container{max-width:1150px;margin:auto;padding:16px 24px;display:flex;align-items:center;justify-content:space-between}.logo{font-size:1.4rem;font-weight:700;color:var(--primary);text-decoration:none}.logo i{color:var(--secondary)}.nav-links{display:flex;align-items:center;gap:24px;list-style:none}.nav-links a{color:var(--dark);text-decoration:none}.btn-primary{display:inline-block;background:linear-gradient(135deg,var(--primary),#ff8e53);color:white!important;padding:11px 22px;border:0;border-radius:30px;text-decoration:none;font-weight:600;cursor:pointer}.hamburger{display:none;border:0;background:none;font-size:1.5rem;cursor:pointer}
.hero{padding:70px 24px;background:linear-gradient(135deg,#fff0f3,#f0f4ff)}.hero-container,.about-container{max-width:1150px;margin:auto;display:grid;grid-template-columns:1fr 1fr;gap:45px;align-items:center}.hero h1{font-size:clamp(2.3rem,5vw,3.5rem);line-height:1.2;margin-bottom:20px}.hero h1 span{color:var(--primary)}.hero p{color:var(--gray);margin-bottom:24px}.hero img,.about img{width:100%;border-radius:20px;display:block}.section{padding:75px 24px;max-width:1150px;margin:auto}.heading{text-align:center;margin-bottom:38px}.heading h2,.about h2{font-size:2.2rem;margin-bottom:10px}.heading p,.about p{color:var(--gray)}.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.card{padding:30px;background:white;border-radius:16px;box-shadow:0 8px 28px #00000009;border-top:4px solid var(--primary)}.card i{font-size:2.2rem;color:var(--primary);margin-bottom:14px}.card h3{margin-bottom:10px}.card p{color:var(--gray);margin-bottom:14px}.price{font-weight:700;color:var(--secondary)}.about{padding:75px 24px;background:white}.about p{margin:14px 0}.features{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px}.features i{color:#48bb78;margin-right:8px}.booking{padding:70px 24px;background:linear-gradient(135deg,#f0f4ff,#fff0f3)}.booking-box{max-width:780px;margin:auto;background:white;padding:36px;border-radius:20px;box-shadow:0 12px 30px #0000000a}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.form-group{display:flex;flex-direction:column;gap:6px;margin-bottom:14px}.form-group.full{grid-column:1/-1}.form-group input,.form-group select,.form-group textarea{width:100%;padding:12px;border:1px solid #e2e8f0;border-radius:8px;font:inherit}.success{display:none;margin-top:16px;background:#48bb78;color:white;padding:14px;border-radius:8px}footer{text-align:center;background:var(--dark);color:white;padding:30px 15px}footer p+p{color:#a0aec0;font-size:.9rem}
@media(max-width:760px){.hamburger{display:block}.nav-links{display:none;position:absolute;top:62px;left:0;width:100%;background:white;padding:24px;flex-direction:column}.nav-links.active{display:flex}.hero-container,.about-container{grid-template-columns:1fr}.hero{text-align:center}.services-grid{grid-template-columns:1fr}.form-grid{grid-template-columns:1fr}.form-group.full{grid-column:auto}.booking-box{padding:22px}.features{grid-template-columns:1fr}}
</style>
</head>
<body>
<header><nav class="nav-container" aria-label="Main navigation">
<a class="logo" href="#home"><i class="fa-solid fa-paw"></i> Paws & Claws</a>
<ul class="nav-links"><li><a href="#home">Home</a></li><li><a href="#services">Services</a></li><li><a href="#about">About Us</a></li><li><a class="btn-primary" href="#booking">Book Appointment</a></li></ul>
<button class="hamburger" type="button" aria-label="Toggle navigation" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
</nav></header>
<main>
<section class="hero" id="home"><div class="hero-container"><div><h1>Pamper Your Pet With <span>Love & Care</span></h1><p>Professional grooming, styling, and spa treatments tailored to keep your furry friends happy, healthy, and looking their absolute best.</p><a class="btn-primary" href="#booking">Schedule a Spa Day</a></div><img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80" alt="Happy groomed dog"></div></section>
<section class="section" id="services"><div class="heading"><h2>Our Premium Services</h2><p>Professional grooming and wellness for your furry friends.</p></div><div class="services-grid">
<article class="card"><i class="fa-solid fa-bath"></i><h3>Bath & Blowout</h3><p>Bath, blow dry, thorough brush out, and nail trim.</p><div class="price">From $40</div></article>
<article class="card"><i class="fa-solid fa-scissors"></i><h3>Full Grooming Package</h3><p>Styling, bath, blow dry, nail clipping, and ear cleaning.</p><div class="price">From $75</div></article>
<article class="card"><i class="fa-solid fa-wand-magic-sparkles"></i><h3>Spa & Wellness</h3><p>Paw pad treatments, teeth brushing, and deshedding care.</p><div class="price">From $30</div></article>
</div></section>
<section class="about" id="about"><div class="about-container"><img src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80" alt="Pet grooming"><div><h2>Why Pet Parents Trust Us</h2><p>We believe grooming is essential to your pet's well-being. Our stylists use gentle methods and premium products to help pets feel at home.</p><ul class="features"><li><i class="fa-solid fa-circle-check"></i>Certified Groomers</li><li><i class="fa-solid fa-circle-check"></i>Cage-Free Care</li><li><i class="fa-solid fa-circle-check"></i>Quality Products</li><li><i class="fa-solid fa-circle-check"></i>Gentle Handling</li></ul></div></div></section>
<section class="booking" id="booking"><div class="booking-box"><div class="heading"><h2>Book an Appointment</h2><p>Try this demo booking form.</p></div>
<form id="bookingForm"><div class="form-grid">
<div class="form-group"><label for="ownerName">Your Name</label><input id="ownerName" name="ownerName" autocomplete="name" required></div>
<div class="form-group"><label for="petName">Pet's Name</label><input id="petName" name="petName" required></div>
<div class="form-group"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
<div class="form-group"><label for="service">Service</label><select id="service" name="service" required><option value="">Choose one</option><option>Bath & Blowout</option><option>Full Grooming Package</option><option>Spa & Wellness</option></select></div>
<div class="form-group full"><label for="notes">Notes (optional)</label><textarea id="notes" name="notes" rows="3"></textarea></div>
</div><button class="btn-primary" type="submit">Request Appointment</button><p class="success" id="successMessage" role="status">Thanks! Demo confirmation only—your booking was not sent.</p></form></div></section>
</main><footer><p><i class="fa-solid fa-paw"></i> Paws & Claws · Luxury Pet Salon</p><p>Demo portfolio project</p></footer>
<script>
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>{
 const opened=navLinks.classList.toggle('active');
 const icon=hamburger.querySelector('i');
 icon.classList.toggle('fa-bars',!opened);
 icon.classList.toggle('fa-xmark',opened);
 hamburger.setAttribute('aria-expanded',String(opened));
});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{
 navLinks.classList.remove('active');
 const icon=hamburger.querySelector('i');
 icon.classList.add('fa-bars'); icon.classList.remove('fa-xmark');
 hamburger.setAttribute('aria-expanded','false');
}));
const bookingForm=document.getElementById('bookingForm');
const successMessage=document.getElementById('successMessage');
bookingForm.addEventListener('submit',event=>{
 event.preventDefault();
 const owner=document.getElementById('ownerName').value.trim();
 if(owner){
  successMessage.style.display='block';
  bookingForm.reset();
  window.setTimeout(()=>{successMessage.style.display='none';},5000);
 }
});
</script>
</body>
</html>
