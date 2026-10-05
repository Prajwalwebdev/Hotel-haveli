const menu = [
["Main Course — Vegetables & Curries","Dum Aloo Gobi Masala","Baby potatoes and cauliflower cooked in a rich onion-tomato gravy.",180,"Veg"],
["Main Course — Vegetables & Curries","Bhindi Do Pyaza","Okra sautéed with double onions and Indian spices.",220,"Veg"],
["Main Course — Vegetables & Curries","Mushroom Rogan Curry","Mushrooms simmered in a rich, aromatic rogan-style curry.",220,"Chef's Special"],
["Main Course — Vegetables & Curries","Hyderabadi Veg Masala","Spicy vegetable curry with Hyderabadi-style spices and herbs.",220,"Spicy • Jain"],
["Main Course — Vegetables & Curries","Kadai Subzi","Assorted vegetables sautéed in kadai masala with capsicum and tomatoes.",220,"Veg"],
["Main Course — Vegetables & Curries","Subz Diwani Handi","Royal-style creamy curry with mixed vegetables and aromatic spices.",230,"Jain"],
["Main Course — Vegetables & Curries","Spicy Veg Kolhapuri","Fiery, bold curry made with vegetables and Kolhapuri masala.",230,"Spicy • Jain"],
["Main Course — Vegetables & Curries","Stuffed Capsicum Curry","Bell peppers stuffed with spiced paneer and vegetables, simmered in gravy.",250,"Chef's Special"],
["Main Course — Vegetables & Curries","Subz Jalfrezi","Veggies stir-fried in tangy tomato sauce with onions and bell peppers.",250,"Jain"],
["Main Course — Vegetables & Curries","Nawabi Vegetable Kofta","Rich, creamy curry with soft vegetable dumplings and royal spices.",250,"Veg"],
["Main Course — Vegetables & Curries","Methi Malai Mutter","Fenugreek leaves and green peas cooked in a creamy, mildly sweet gravy.",230,"Jain"],
["Main Course — Vegetables & Curries","Patiala Papad Curry","Traditional curry of spiced papad simmered in tangy yogurt-based gravy.",260,"Spicy • Jain"],
["Main Course — Vegetables & Curries","Royal Kaju Masala","Cashews simmered in a luxurious onion-tomato masala.",250,"Chef's Special"],
["Main Course — Vegetables & Curries","Veg Seekh Kabab Masala","Spiced vegetable seekh kebabs simmered in a rich, flavorful gravy.",250,"Spicy • Chef's Special"],
["Paneer Specialities","Shahi Paneer","Royal paneer curry with rich, creamy gravy and a hint of sweetness.",260,"Chef's Special • Jain"],
["Paneer Specialities","Paneer Butter Masala","Classic North Indian curry with buttery tomato-based gravy.",240,"Jain"],
["Paneer Specialities","Kadai Paneer","Paneer sautéed with bell peppers and onion in kadai masala.",240,"Spicy • Jain"],
["Paneer Specialities","Paneer Lazeez","A rich and flavorful paneer curry with exotic spices.",250,"Jain"],
["Paneer Specialities","Paneer Kurchan","Shredded paneer cooked in spicy, creamy tomato-based gravy.",250,"Veg"],
["Paneer Specialities","Matar Paneer","Paneer and green peas simmered in a mildly spiced curry.",250,"Jain"],
["Paneer Specialities","Palak Paneer","Spinach-based curry blended with cubes of soft paneer.",250,"Veg"],
["Paneer Specialities","Tandoori Paneer Tikka Masala","Tandoori paneer tikka served in a creamy, spicy gravy.",280,"Spicy • Chef's Special • Jain"],
["Dals & Kadhi","Dal Fry","Yellow lentils tempered with garlic, cumin, and ghee.",170,"Jain"],
["Dals & Kadhi","Dal Makhani","Slow-cooked black lentils in a buttery tomato gravy.",190,"Jain"],
["Dals & Kadhi","Rajma Masala","Flavorful, spiced kidney bean curry served as a comforting dal.",160,"Veg"],
["Dals & Kadhi","Dhaba Style Dal","Rustic lentil preparation just like a roadside dhaba.",190,"Spicy • Jain"],
["Dals & Kadhi","Punjabi Kadhi Pakoda","Yogurt-based curry with fried gram flour dumplings.",190,"Chef's Special • Jain"],
["Dals & Kadhi","Chole Masala","Chole Masala is a hearty chickpea dal simmered in a spiced, tangy gravy.",150,"Veg"],
["Indian Breads","Tandoori Roti","Whole wheat flatbread baked in a clay oven.",40,"Veg"],
["Indian Breads","Naan","Soft leavened bread baked in a tandoor.",60,"Veg"],
["Indian Breads","Garlic Naan","Naan topped with garlic and coriander.",70,"Veg"],
["Indian Breads","Kulcha","Soft, fluffy Indian flatbread baked to golden perfection.",70,"Veg"],
["Indian Breads","Rumali Roti","Ultra-thin, soft roti folded like a handkerchief.",70,"Veg"],
["Indian Breads","Lachha Paratha","Flaky, multi-layered flatbread.",70,"Veg"],
["Indian Breads","Garlic Chilli Lachha Paratha","Crispy, layered flatbread infused with bold garlic and chilli flavors.",80,"Spicy"],
["Indian Breads","Masala Stuffed Kulcha","Soft flatbread stuffed with spiced filling.",80,"Veg"],
["Indian Breads","Paneer Stuffed Kulcha","Soft leavened flatbread filled with spiced paneer and herbs.",100,"Veg"],
["Raitas & Salads","Boondi Raita","Yogurt mixed with crispy boondi and mild Indian spices.",80,"Jain"],
["Raitas & Salads","Chilled Cucumber Raita","Cool yogurt with grated cucumber and roasted cumin.",80,"Jain"],
["Raitas & Salads","Mix Vegetable Raita","Freshly diced veggies blended with seasoned curd.",80,"Veg"],
["Raitas & Salads","Fresh Green Salad","A healthy mix of cucumber, tomatoes, onions, and carrots.",120,"Veg"],
["Raitas & Salads","Haveli Kachumber Salad","Traditional North Indian salad with finely chopped onions, cucumbers, and tomatoes.",150,"Veg"],
["Paneer Tikkas","Classic Paneer Tikka","Marinated paneer cubes grilled to perfection in a tandoor.",250,"Jain"],
["Paneer Tikkas","Achaari Paneer Tikka","Tikka with tangy pickle spices, grilled for a smoky achar flavor.",260,"Spicy"],
["Paneer Tikkas","Afghani Malai Paneer Tikka","Creamy, mildly spiced paneer marinated in cream and cheese.",270,"Jain"],
["Paneer Tikkas","Peri Peri Paneer Tikka","Zesty tikka marinated in spicy peri peri seasoning.",270,"Spicy • Chef's Special • Jain"],
["Tandoori Starters & Kebabs","Chargrilled Mushroom Tikka","Juicy mushrooms marinated in spices and grilled over charcoal.",240,"Veg"],
["Tandoori Starters & Kebabs","Tandoori Baby Potato","Potatoes stuffed with spicy filling, grilled for a smoky flavor.",220,"Veg"],
["Tandoori Starters & Kebabs","Aloo Kaju Tikki","Potato patties with a crunchy cashew center — shallow fried.",240,"Chef's Special"],
["Tandoori Starters & Kebabs","Achaari Babycorn Tikka","Pickle-spiced marinated babycorn, grilled for a crunchy texture.",220,"Spicy • Chef's Special"],
["Tandoori Starters & Kebabs","Veg Seekh Kabab","Spiced veg mince grilled over tandoor flames.",240,"Veg"],
["Tandoori Starters & Kebabs","Malai Seekh Kabab","Creamy, mild seekh kabab with cheese & herbs.",250,"Veg"],
["Tandoori Starters & Kebabs","Hara Bhara Kabab","Spinach and green pea patties flavored with Indian spices.",240,"Veg"],
["Tandoori Starters & Kebabs","Dahi ke Sholay","Hung curd and spicy filling stuffed into bread and deep-fried till crisp.",240,"Chef's Special"],
["Tandoori Starters & Kebabs","Masala Chaap Tikka","Soya chaap marinated in bold spices, grilled to smoky perfection.",250,"Spicy"],
["Tandoori Starters & Kebabs","Afghani Chaap Tikka","Creamy, mild soya chaap tikka with rich, buttery marinade.",250,"Veg"],
["Tandoori Starters & Kebabs","Tandoori Signature Platter","Chef's special selection of assorted vegetarian tandoori appetizers.",350,"Chef's Special"],
["Chaats & Street Food","Dahi Bhalla","Soft lentil dumplings soaked in yogurt and topped with chutneys.",130,"Chef's Special"],
["Chaats & Street Food","Dahi Papdi Chaat","Crisp papdis topped with yogurt, chutneys, and masala.",130,"Chef's Special"],
["Chaats & Street Food","Samosa Chaat","Crushed samosa topped with chole, yogurt, and chutneys.",130,"Veg"],
["Chaats & Street Food","Sev Puri","Crisp puris topped with potatoes, chutneys, and sev.",130,"Veg"],
["Chaats & Street Food","Pav Bhaji","Spicy mashed vegetables served with buttery pav.",170,"Veg"],
["Chaats & Street Food","Chole Bhature","Classic North Indian dish featuring spicy chickpea curry served with deep-fried bhature.",170,"Veg"],
["Chaats & Street Food","Ragda Patties","Tangy street snack with potato patties and spicy white pea curry.",150,"Veg"],
["Chaats & Street Food","Aloo Tikki Roll","Spicy potato patty wrapped in a soft flatbread with chutneys and veggies.",160,"Veg"],
["Chaats & Street Food","Paneer Tikka Roll","Flavorful wrap filled with grilled spiced paneer, veggies, and tangy sauces.",180,"Veg"],
["Chaats & Street Food","Soya Tikka Roll","Protein-packed wrap with marinated grilled soya chunks, fresh veggies, and zesty sauces.",170,"Veg"],
["Desserts","Gajar Halwa","Traditional carrot pudding slow-cooked in milk and ghee.",130,"Chef's Special"],
["Desserts","Gulab Jamun (2 pieces)","Soft, deep-fried milk balls soaked in cardamom syrup.",130,"Veg"],
["Desserts","Seasonal Fruit Cream","Freshly cut seasonal fruits served chilled. Add ice-cream at ₹60.",140,"Veg"],
["Rice & Khichdi","Curd Rice","South Indian rice delicacy mixed with curd and mild tempering.",150,"Veg"],
["Rice & Khichdi","Steamed Basmati Rice","Long grain, fragrant rice, simply steamed.",120,"Veg"],
["Rice & Khichdi","Jeera Rice","Basmati rice tempered with cumin seeds.",160,"Veg"],
["Rice & Khichdi","Dal Khichdi with Kadhi","Comforting rice-lentil mix served with spiced yogurt curry.",190,"Jain"],
["Rice & Khichdi","Palak Khichdi with Kadhi","Spinach-infused rice-lentil dish with kadhi on the side.",200,"Veg"],
["Rice & Khichdi","Vegetable Pulao","Aromatic basmati rice cooked with vegetables and mild spices.",220,"Jain"],
["Rice & Khichdi","Peas Pulao","Basmati rice with sweet green peas and cumin.",220,"Jain"],
["Rice & Khichdi","Subz Dum Biryani","Fragrant layered rice with marinated vegetables cooked on dum.",240,"Spicy"],
["Rice & Khichdi","Soya Chaap Dum Biryani","A hearty biryani with soya chaap chunks and biryani spices.",250,"Spicy"],
["Indo-Chinese — Rice & Noodles","Veg Fried Rice","Stir-fried rice with mixed vegetables and soy sauce.",170,"Jain"],
["Indo-Chinese — Rice & Noodles","Schezwan Fried Rice","Fiery fried rice tossed in Schezwan sauce.",190,"Spicy"],
["Indo-Chinese — Rice & Noodles","Burnt Garlic Fried Rice","Aromatic rice infused with the flavor of roasted garlic.",190,"Veg"],
["Indo-Chinese — Rice & Noodles","Hakka Noodles","Stir-fried noodles with vegetables and Indo-Chinese flavors.",180,"Jain"],
["Indo-Chinese — Rice & Noodles","Schezwan Veg Noodles","Spicy noodles tossed in Schezwan sauce.",200,"Spicy"],
["Indo-Chinese — Rice & Noodles","Burnt Garlic Noodles","Noodles flavored with crispy fried garlic and vegetables.",200,"Veg"],
["Snacks & Fries","Classic French Fries","Golden, crisp potato fries — simple, salty, and satisfying. Add peri peri ₹20.",150,"Veg"],
["Snacks & Fries","Chinese Potato","Crispy potato sticks tossed in a tangy Indo-Chinese sauce.",180,"Veg"],
["Snacks & Fries","Honey Chilli Potato","Fried potato fingers coated in a sticky, sweet, and spicy honey chilli glaze.",190,"Chef's Special"],
["Starters — Babycorn, Mushroom & Paneer","Babycorn Manchurian","Batter-fried babycorn tossed in a bold garlic-soy Manchurian sauce.",180,"Jain"],
["Starters — Babycorn, Mushroom & Paneer","Chilli Babycorn","Crisp babycorn stir-fried with bell peppers, onions, and spicy sauces.",190,"Spicy • Jain"],
["Starters — Babycorn, Mushroom & Paneer","Chilli Mushroom","Stir-fried mushrooms with chillies, garlic, and soy — spicy and flavorful.",200,"Spicy"],
["Starters — Babycorn, Mushroom & Paneer","Schezwan Mushroom","Mushrooms tossed in fiery Schezwan sauce with Indo-Chinese flair.",210,"Spicy"],
["Starters — Babycorn, Mushroom & Paneer","Chilli Paneer","Cottage cheese cubes tossed in spicy sauces with capsicum and onion.",210,"Spicy • Jain"],
["Starters — Babycorn, Mushroom & Paneer","Schezwan Paneer","Paneer stir-fried in bold, spicy Schezwan-style seasoning.",220,"Spicy"],
["Starters — Babycorn, Mushroom & Paneer","Peri Peri Mushroom 65","Fiery fried mushrooms in a tangy peri peri toss.",240,"Spicy"],
["Beverages","Lassi","Traditional sweet or salted yogurt drink.",150,"Veg"],
["Beverages","Dry Fruit Lassi","Rich, creamy lassi blended with nuts and dry fruits.",180,"Chef's Special"],
["Beverages","Chaas","Spiced buttermilk — refreshing and light.",90,"Veg"],
["Beverages","Jaljeera Soda","Tangy, spiced soda made with cumin and mint.",100,"Veg"],
["Beverages","Thandai","Cool, spiced milk beverage with almonds, saffron & cardamom.",120,"Chef's Special"],
["Beverages","Shikanji Soda","Classic Indian lemonade with herbs and spices.",100,"Chef's Special"],
["Beverages","Kala Khatta Soda","Tangy blackcurrant-flavored cooler.",110,"Veg"],
["Beverages","Lemon Soda","Fizzy lemon drink served sweet or salty.",90,"Veg"],
["Beverages","Fresh Juice (Juice of the Day)","Seasonal fresh juice served chilled.",100,"Veg"],
["Beverages","Mint Soda","Refreshing, chilled drink bursting with tangy mint and a fizzy sparkle.",100,"Veg"],
["Beverages","Raw Mango Soda","Tangy, fizzy drink with a refreshing twist of raw mango.",100,"Veg"]
];

const catOrder = ["All","Main Course — Vegetables & Curries","Paneer Specialities","Dals & Kadhi","Indian Breads","Raitas & Salads","Paneer Tikkas","Tandoori Starters & Kebabs","Cha­ats & Street Food","Desserts","Rice & Khichdi","Indo-Chinese — Rice & Noodles","Snacks & Fries","Starters — Babycorn, Mushroom & Paneer","Beverages"];
// Fix visual category label while preserving menu data.
catOrder[8] = "Chaats & Street Food";

const filters = document.getElementById("menuFilters");
catOrder.forEach((cat,i)=>{
  const b=document.createElement("button"); b.className="filter-btn"+(i===0?" active":""); b.textContent=cat==="All"?"All":cat.split(" — ")[0];
  b.dataset.cat=cat; filters.appendChild(b);
});

let activeCat="All", query="";
function renderMenu(){
  const grid=document.getElementById("menuGrid");
  const filtered=menu.filter(x=>{
    const cat=x[0], name=x[1], desc=x[2];
    const matchesCat=activeCat==="All"||cat===activeCat;
    const q=query.toLowerCase();
    return matchesCat && (!q || (name+" "+desc+" "+cat).toLowerCase().includes(q));
  });
  grid.innerHTML=filtered.map(x=>`
    <article class="menu-card">
      <div><h3>${x[1]}</h3><span class="tag">${x[4]}</span></div>
      <div class="price">₹${x[3]}</div>
      <p>${x[2]}</p>
    </article>`).join("") || `<p style="grid-column:1/-1;text-align:center;color:#786b61">No dishes found. Try another search.</p>`;
}
filters.addEventListener("click",e=>{
  if(!e.target.classList.contains("filter-btn"))return;
  document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
  e.target.classList.add("active"); activeCat=e.target.dataset.cat; renderMenu();
});
document.getElementById("menuSearch").addEventListener("input",e=>{query=e.target.value;renderMenu()});
renderMenu();

const pageLinks=document.getElementById("menuPageLinks");
for(let i=1;i<=7;i++){const a=document.createElement("a");a.href=`assets/menu-page-${i}.jpeg`;a.target="_blank";a.textContent=`Menu Page ${i}`;pageLinks.appendChild(a)}

document.querySelector(".nav-toggle").addEventListener("click",()=>document.querySelector(".nav").classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav").classList.remove("open")));

const dateInput=document.querySelector('input[name="date"]');
dateInput.min=new Date().toISOString().split("T")[0];

function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3500)}
document.getElementById("bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=Object.fromEntries(new FormData(e.target).entries());
  const bookings=JSON.parse(localStorage.getItem("haveliBookings")||"[]");
  data.id="HVM-"+Date.now().toString().slice(-6); data.createdAt=new Date().toISOString();
  bookings.push(data); localStorage.setItem("haveliBookings",JSON.stringify(bookings));
  document.getElementById("bookingMessage").textContent=`Reservation request ${data.id} saved. We'll confirm ${data.name}'s table for ${data.guests} guest(s) on ${data.date} at ${data.time}.`;
  e.target.reset(); dateInput.min=new Date().toISOString().split("T")[0];
  showToast("Table reservation saved successfully.");
});

const defaultReviews=[
  {name:"Aarav",rating:5,text:"Beautiful atmosphere and the paneer dishes were rich and comforting. A lovely place for a relaxed dinner."},
  {name:"Meera",rating:5,text:"The tandoori platter and garlic naan were highlights. The classical Haveli vibe makes the evening feel special."},
  {name:"Rohan",rating:4,text:"Loved the vegetarian variety. The desserts and lassi were a perfect finish to the meal."}
];
function getReviews(){return [...defaultReviews,...JSON.parse(localStorage.getItem("haveliReviews")||"[]")]}
function renderReviews(){
  document.getElementById("reviewsGrid").innerHTML=getReviews().map(r=>`
    <article class="review-card">
      <div class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div>
      <p>“${escapeHtml(r.text)}”</p><small>— ${escapeHtml(r.name)}</small>
    </article>`).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
renderReviews();

const dialog=document.getElementById("reviewDialog");
document.getElementById("openReview").addEventListener("click",()=>dialog.showModal());
document.getElementById("reviewForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=Object.fromEntries(new FormData(e.target).entries());
  data.rating=Number(data.rating);
  const reviews=JSON.parse(localStorage.getItem("haveliReviews")||"[]");
  reviews.unshift(data);localStorage.setItem("haveliReviews",JSON.stringify(reviews));
  renderReviews();dialog.close();e.target.reset();showToast("Thank you — your review has been published.");
});
