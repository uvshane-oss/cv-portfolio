// Named slots in image-map.json. Local visualisation first; original photograph on load failure.
const wix = id => `https://static.wixstatic.com/media/${id}/v1/fill/w_1100,h_900,al_c,q_85/${id}`;
const assets = {
  "gallery": [
    {
      "name": "Invercargill headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_9c522512df9b4e7bb0c7a43e3470ff19~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_9c522512df9b4e7bb0c7a43e3470ff19~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-001.png"
    },
    {
      "name": "Teddy bears memorial",
      "source": "https://static.wixstatic.com/media/d4aff4_82d989a557004170a9aa0e96d1471041~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_82d989a557004170a9aa0e96d1471041~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-002.png"
    },
    {
      "name": "Memorial headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_f8f4fa06dce54e749c967c0623f9d6e0~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_f8f4fa06dce54e749c967c0623f9d6e0~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-003.png"
    },
    {
      "name": "Detailed headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_bedc5132127e4fe097a3044b0ece2fac~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_bedc5132127e4fe097a3044b0ece2fac~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-004.png"
    },
    {
      "name": "A love of music",
      "source": "https://static.wixstatic.com/media/d4aff4_276e2ce88422496b9d5659393d1f6e26~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_276e2ce88422496b9d5659393d1f6e26~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-005.png"
    },
    {
      "name": "Custom memorial",
      "source": "https://static.wixstatic.com/media/d4aff4_71cf1f742b1b41a3ae7f4c1dbe278dc0~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_71cf1f742b1b41a3ae7f4c1dbe278dc0~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-006.png"
    },
    {
      "name": "Stone memorial",
      "source": "https://static.wixstatic.com/media/d4aff4_06e415f79620469388b69fda92f290b7~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_06e415f79620469388b69fda92f290b7~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-007.png"
    },
    {
      "name": "Granite headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_fd355f70cb1e4ea7882881ca7fc2c79c~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_fd355f70cb1e4ea7882881ca7fc2c79c~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-008.png"
    },
    {
      "name": "A personal tribute",
      "source": "https://static.wixstatic.com/media/d4aff4_ee668778afb346e5b619b44ab620255d~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_ee668778afb346e5b619b44ab620255d~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-009.png"
    },
    {
      "name": "A love of cars",
      "source": "https://static.wixstatic.com/media/d4aff4_2a70f3bec8e44596a54382fab50a7d84~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_2a70f3bec8e44596a54382fab50a7d84~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-010.png"
    },
    {
      "name": "Roses on grey stone",
      "source": "https://static.wixstatic.com/media/d4aff4_fb9a5e68bd184dd48d1877163e9b5da0~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_fb9a5e68bd184dd48d1877163e9b5da0~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-011.png"
    },
    {
      "name": "A crafted headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_40a900275930410e9976b86a9b488a08~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_40a900275930410e9976b86a9b488a08~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-012.png"
    },
    {
      "name": "Eiffel Tower tribute",
      "source": "https://static.wixstatic.com/media/d4aff4_8fb56ba2ce084dd0a0032552e9a8c376~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_8fb56ba2ce084dd0a0032552e9a8c376~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-013.png"
    },
    {
      "name": "Memorial in stone",
      "source": "https://static.wixstatic.com/media/d4aff4_3850cd0cc01f4391bdbd0a6030020029~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_3850cd0cc01f4391bdbd0a6030020029~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-014.png"
    },
    {
      "name": "Hunter memorial",
      "source": "https://static.wixstatic.com/media/d4aff4_e2b7b462fc72476eb888d4785f45cd88~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_e2b7b462fc72476eb888d4785f45cd88~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-015.png"
    },
    {
      "name": "Headstone detail",
      "source": "https://static.wixstatic.com/media/d4aff4_cf6d21187a5348f0a62bffc46c81c3b0~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_cf6d21187a5348f0a62bffc46c81c3b0~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-016.png"
    },
    {
      "name": "Custom memorial",
      "source": "https://static.wixstatic.com/media/d4aff4_4ce8cfc2e1904e04ba28e0e3ade06624~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_4ce8cfc2e1904e04ba28e0e3ade06624~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-017.png"
    },
    {
      "name": "Couple headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_a29d305fb70a4f4da053e5a9514aa983~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_a29d305fb70a4f4da053e5a9514aa983~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-018.png"
    },
    {
      "name": "Hunter plaque",
      "source": "https://static.wixstatic.com/media/d4aff4_ef47ae1cbcc94e83a98c8eab82aa22ca~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_ef47ae1cbcc94e83a98c8eab82aa22ca~mv2.jpg",
      "category": "plaque",
      "local": "assets/visualisations/plaques/plaque-001.png"
    },
    {
      "name": "Horse racing tribute",
      "source": "https://static.wixstatic.com/media/d4aff4_eb815b0669d444a099a03e562a867a69~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_eb815b0669d444a099a03e562a867a69~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-020.png"
    },
    {
      "name": "Angel headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_e52e8d2a2f834d41bcfd442739bea34c~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_e52e8d2a2f834d41bcfd442739bea34c~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-021.png"
    },
    {
      "name": "Memorial stone",
      "source": "https://static.wixstatic.com/media/d4aff4_4ee27f25bce94ff4b678c0ab7bc656f3~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_4ee27f25bce94ff4b678c0ab7bc656f3~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-022.png"
    },
    {
      "name": "Round headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_d3d330e92d72414c857e0d8943a215db~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_d3d330e92d72414c857e0d8943a215db~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-023.png"
    },
    {
      "name": "Granite memorial",
      "source": "https://static.wixstatic.com/media/d4aff4_bf720a037c304856851b51661b5865f8~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_bf720a037c304856851b51661b5865f8~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-024.png"
    },
    {
      "name": "Weeping angel",
      "source": "https://static.wixstatic.com/media/d4aff4_6cd381ff12ab48dc91109b2d418eef25~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_6cd381ff12ab48dc91109b2d418eef25~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-025.png"
    },
    {
      "name": "Memorial detail",
      "source": "https://static.wixstatic.com/media/d4aff4_a67f10eef9234b75a064f73a8842ca37~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_a67f10eef9234b75a064f73a8842ca37~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-026.png"
    },
    {
      "name": "Koru headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_53cc5eb410064a03ac8e7d28aae932f1~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_53cc5eb410064a03ac8e7d28aae932f1~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-027.png"
    },
    {
      "name": "Unique stonework",
      "source": "https://static.wixstatic.com/media/d4aff4_09ef7b52f5ca4e85a4e334cb9d2ecea1~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_09ef7b52f5ca4e85a4e334cb9d2ecea1~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-028.png"
    },
    {
      "name": "Maiden Stone memorial",
      "source": "https://static.wixstatic.com/media/d4aff4_551df5601c4f415187a38e87a4870007~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_551df5601c4f415187a38e87a4870007~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-029.png"
    },
    {
      "name": "Horse headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_1739a18a2ad04a30b4b78628c543fa7c~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_1739a18a2ad04a30b4b78628c543fa7c~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-030.png"
    },
    {
      "name": "Custom headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_083ce82c2a334f3b8e733b337afd5d78~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_083ce82c2a334f3b8e733b337afd5d78~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-031.png"
    },
    {
      "name": "Flower and butterfly",
      "source": "https://static.wixstatic.com/media/d4aff4_c76aacdcff144f91ac52ef52c363159f~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_c76aacdcff144f91ac52ef52c363159f~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-032.png"
    },
    {
      "name": "Southland headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_0c81c6074d0641669d94c655dbb40b62~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_0c81c6074d0641669d94c655dbb40b62~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-033.png"
    },
    {
      "name": "Monumental stonework",
      "source": "https://static.wixstatic.com/media/d4aff4_ac5a8880299e4d98b4e977bb24693b29~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_ac5a8880299e4d98b4e977bb24693b29~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-034.png"
    },
    {
      "name": "Southland plaques",
      "source": "https://static.wixstatic.com/media/d4aff4_ecf683fbc4414beca41803c1e182cf9a~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_ecf683fbc4414beca41803c1e182cf9a~mv2.jpg",
      "category": "plaque",
      "local": "assets/visualisations/plaques/plaque-002.png"
    },
    {
      "name": "Duck hunting tribute",
      "source": "https://static.wixstatic.com/media/d4aff4_5a5b3bb789b747669c4a93d77c1fbce9~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_5a5b3bb789b747669c4a93d77c1fbce9~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/headstones/headstone-036.png"
    },
    {
      "name": "Memorial maker",
      "source": "https://static.wixstatic.com/media/d4aff4_9eda12b9ddea45039db1ce31e9645c89~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_9eda12b9ddea45039db1ce31e9645c89~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-037.png"
    },
    {
      "name": "Custom plaque",
      "source": "https://static.wixstatic.com/media/d4aff4_f1a9e1b98dd94ca0801fa74b97f9c2d0~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_f1a9e1b98dd94ca0801fa74b97f9c2d0~mv2.jpg",
      "category": "plaque",
      "local": "assets/visualisations/plaques/plaque-003.png"
    },
    {
      "name": "Unique headstone",
      "source": "https://static.wixstatic.com/media/d4aff4_e07c506bf4bc4d749608ce160de74dfd~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_e07c506bf4bc4d749608ce160de74dfd~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-039.png"
    },
    {
      "name": "Headstone design",
      "source": "https://static.wixstatic.com/media/d4aff4_e3ee4a2a9d3e4e28927dfe5c6cab8185~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_e3ee4a2a9d3e4e28927dfe5c6cab8185~mv2.jpg",
      "category": "stone",
      "local": "assets/visualisations/headstones/headstone-040.png"
    },
    {
      "name": "Permanite plaque",
      "source": "https://static.wixstatic.com/media/d4aff4_0935bf26791a4db8a8ec70bcf05e0499~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_0935bf26791a4db8a8ec70bcf05e0499~mv2_d_5616_3744_s_4_2.jpg",
      "category": "plaque",
      "local": "assets/visualisations/plaques/plaque-004.png"
    },
    {
      "name": "Bronze plaque",
      "source": "https://static.wixstatic.com/media/d4aff4_bac930d5dbd1418dac78b21b88a3bb97~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_bac930d5dbd1418dac78b21b88a3bb97~mv2_d_5616_3744_s_4_2.jpg",
      "category": "plaque",
      "local": "assets/visualisations/plaques/plaque-005.png"
    },
    {
      "name": "Pet ashes casket",
      "source": "https://static.wixstatic.com/media/d4aff4_bb82c6401cb540c6bc86e62f086c45b2~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_bb82c6401cb540c6bc86e62f086c45b2~mv2.jpg",
      "category": "personal",
      "local": "assets/visualisations/urns-boxes/box-001.png"
    }
  ],
  "restorationBefore": "https://static.wixstatic.com/media/d4aff4_a3648d257abe4467a5247128c96dd469~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_a3648d257abe4467a5247128c96dd469~mv2.jpg",
  "restorationAfter": "https://static.wixstatic.com/media/d4aff4_fca2828592194b1e9b6f03453d2afbb2~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_1100,h_900,al_c,q_85/d4aff4_fca2828592194b1e9b6f03453d2afbb2~mv2_d_5616_3744_s_4_2.jpg"
};
const $ = sel => document.querySelector(sel);
function setPreferred(img, item) {
  img.alt = item.name || "";
  img.onerror = () => {
    if (img.src !== item.source) { img.onerror = null; img.src = item.source; }
  };
  img.src = "./" + item.local;
}
const content = {
 headstone:{kicker:"Explore headstones",heading:"A tribute as individual as they were.",description:"From classic granite forms to custom shapes, lettering and artwork, we can help bring the details together. The existing range includes granite in a variety of colours.",image:"./assets/category/headstones.webp",source:assets.gallery[4].source,alt:"Headstone design visualisation"},
 plaque:{kicker:"Explore memorial plaques",heading:"A meaningful mark on a special place.",description:"Explore enduring bronze plaques and full-colour Permanite designs for memorials, gardens and community places. Materials, shape and artwork can reflect where it will live.",image:"./assets/category/plaques.webp",source:assets.gallery[40].source,alt:"Plaque design visualisation"},
 ashes:{kicker:"Explore ashes & keepsakes",heading:"A place to keep them close.",description:"Ask about ashes caskets and keepsakes, including personalised choices for pets. We can help you find a size and style that feels right.",image:"./assets/category/urns-boxes.webp",source:assets.gallery[42].source,alt:"Ashes box and urn design visualisation"},
 pet:{kicker:"Explore pet memorials",heading:"For the friend who was family.",description:"Pet headstones, plaques, photo ceramics, cremation rocks, stone statues and ashes caskets offer many ways to remember a companion.",image:"./assets/category/pet-memorials.webp",source:assets.gallery[42].source,alt:"Pet memorial design visualisation"}
};
let selectedType = "headstone", selectedInterests = new Set(), activeFilter = "all", showAll = false, visibleItems = [];
function setType(type) {
 selectedType=type;
 document.querySelectorAll(".choice").forEach(b=>{const on=b.dataset.type===type;b.classList.toggle("active",on);b.setAttribute("aria-pressed",String(on))});
 const c=content[type]; $("#explorer-img").src=c.image;$("#explorer-img").alt=c.alt;$("#explorer-original").href=c.source;
 $("#explorer-kicker").textContent=c.kicker;$("#explorer-heading").textContent=c.heading;$("#explorer-description").textContent=c.description;updateNote();
}
function updateNote(){const names={headstone:"headstone",plaque:"plaque",ashes:"ashes memorial",pet:"pet memorial"};$("#selection-note").textContent=selectedInterests.size ? `Your direction: ${names[selectedType]} with ${[...selectedInterests].join(", ").toLowerCase()}.` : "Select a detail that interests you, or simply keep exploring."}
document.querySelectorAll(".choice").forEach(b=>b.addEventListener("click",()=>setType(b.dataset.type)));
document.querySelectorAll(".option-list button").forEach(b=>b.addEventListener("click",()=>{const v=b.dataset.interest;selectedInterests.has(v)?selectedInterests.delete(v):selectedInterests.add(v);b.setAttribute("aria-pressed",String(selectedInterests.has(v)));updateNote()}));
function renderWork() {
 const list=assets.gallery.filter(item=>activeFilter==="all"||item.category===activeFilter);
 const shown=showAll?list:list.slice(0,6);
 visibleItems=shown;
 const grid=$("#work-grid");grid.replaceChildren();
 shown.forEach((item,index)=>{
  const card=document.createElement("article");card.className="work-card";
  const wrap=document.createElement("button");wrap.type="button";wrap.className="image-wrap image-open";
  wrap.setAttribute("aria-label",`View ${item.name} larger`);
  wrap.addEventListener("click",()=>openImageViewer(visibleItems,index));
  const img=document.createElement("img");img.loading="lazy";setPreferred(img,item);wrap.append(img);
  const copy=document.createElement("div");copy.className="card-copy";
  const small=document.createElement("small");small.textContent=item.category==="personal"?"Personal story":item.category==="plaque"?"Memorial plaque":"Stone & form";
  const title=document.createElement("h3");title.textContent=item.name;
  const p=document.createElement("p");p.textContent="Explore the shape, surface and personal details in this Maiden Stone example.";
  const a=document.createElement("a");a.className="original-link";a.textContent="View original photo ↗";a.href=item.source;a.target="_blank";a.rel="noopener";
  copy.append(small,title,p,a);card.append(wrap,copy);grid.append(card);
 });
 $("#more-work").hidden=shown.length>=list.length;
}
// Created here so the small GitHub update only replaces app.js and styles.css.
const viewer=document.createElement("dialog");
viewer.className="image-viewer";
viewer.setAttribute("aria-label","Memorial image viewer");
viewer.innerHTML=`<div class="viewer-shell">
 <div class="viewer-toolbar">
  <button type="button" class="viewer-close" aria-label="Close image viewer">Close <span aria-hidden="true">×</span></button>
  <div class="viewer-zoom">
   <button type="button" class="viewer-zoom-out" aria-label="Zoom out">−</button>
   <span class="viewer-zoom-label" aria-live="polite">100%</span>
   <button type="button" class="viewer-zoom-in" aria-label="Zoom in">+</button>
  </div>
 </div>
 <div class="viewer-stage">
  <button type="button" class="viewer-prev" aria-label="Previous image">‹</button>
  <div class="viewer-scroll"><img class="viewer-image" alt=""></div>
  <button type="button" class="viewer-next" aria-label="Next image">›</button>
 </div>
 <div class="viewer-caption"><span class="viewer-title"></span><span class="viewer-count"></span><a class="viewer-original" href="#" target="_blank" rel="noopener">View original photo ↗</a></div>
</div>`;
document.body.append(viewer);
let viewerItems=[],viewerIndex=0,viewerZoom=1;
const viewerImg=viewer.querySelector(".viewer-image");
const viewerScroll=viewer.querySelector(".viewer-scroll");
const zoomLevels=[1,1.5,2,3];
function updateZoom(){
 viewerImg.style.width=`${viewerZoom*100}%`;
 viewerImg.style.maxHeight=viewerZoom===1?"70vh":"none";
 viewer.querySelector(".viewer-zoom-label").textContent=`${Math.round(viewerZoom*100)}%`;
 viewer.querySelector(".viewer-zoom-out").disabled=viewerZoom===zoomLevels[0];
 viewer.querySelector(".viewer-zoom-in").disabled=viewerZoom===zoomLevels[zoomLevels.length-1];
 viewerScroll.scrollTo(0,0);
}
function showViewerImage(){
 const item=viewerItems[viewerIndex];
 if(item.local)setPreferred(viewerImg,item);
 else {viewerImg.onerror=null;viewerImg.src=item.image;viewerImg.alt=item.alt||item.name}
 viewer.querySelector(".viewer-title").textContent=item.name;
 viewer.querySelector(".viewer-count").textContent=viewerItems.length>1?`${viewerIndex+1} / ${viewerItems.length}`:"";
 viewer.querySelector(".viewer-original").href=item.source;
 viewer.querySelector(".viewer-prev").hidden=viewerItems.length<2;
 viewer.querySelector(".viewer-next").hidden=viewerItems.length<2;
 viewerZoom=1;updateZoom();
}
function openImageViewer(items,index){
 viewerItems=items.slice();viewerIndex=index;showViewerImage();
 viewer.showModal();
 viewer.querySelector(".viewer-close").focus();
}
function moveViewer(step){viewerIndex=(viewerIndex+step+viewerItems.length)%viewerItems.length;showViewerImage()}
viewer.querySelector(".viewer-close").addEventListener("click",()=>viewer.close());
viewer.querySelector(".viewer-prev").addEventListener("click",()=>moveViewer(-1));
viewer.querySelector(".viewer-next").addEventListener("click",()=>moveViewer(1));
viewer.querySelector(".viewer-zoom-out").addEventListener("click",()=>{viewerZoom=zoomLevels[Math.max(0,zoomLevels.indexOf(viewerZoom)-1)];updateZoom()});
viewer.querySelector(".viewer-zoom-in").addEventListener("click",()=>{viewerZoom=zoomLevels[Math.min(zoomLevels.length-1,zoomLevels.indexOf(viewerZoom)+1)];updateZoom()});
viewer.addEventListener("click",e=>{if(e.target===viewer)viewer.close()});
viewer.addEventListener("keydown",e=>{
 if(e.key==="ArrowLeft"&&viewerItems.length>1){e.preventDefault();moveViewer(-1)}
 if(e.key==="ArrowRight"&&viewerItems.length>1){e.preventDefault();moveViewer(1)}
});
const explorerImg=$("#explorer-img");
explorerImg.setAttribute("tabindex","0");
explorerImg.setAttribute("role","button");
explorerImg.setAttribute("aria-label","View selected memorial image larger");
function openExplorer(){const c=content[selectedType];openImageViewer([{name:c.kicker,image:c.image,source:c.source,alt:c.alt}],0)}
explorerImg.addEventListener("click",openExplorer);
explorerImg.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openExplorer()}});
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{activeFilter=b.dataset.filter;showAll=false;document.querySelectorAll(".filter").forEach(x=>{const on=x===b;x.classList.toggle("active",on);x.setAttribute("aria-pressed",String(on))});renderWork()}));
$("#more-work").addEventListener("click",()=>{showAll=true;renderWork()});
setPreferred($("#craft-img"),assets.gallery[31]);
$("#before-img").src=assets.restorationBefore;$("#after-img").src=assets.restorationAfter;
const compare=$("#compare"), mask=$("#before-mask"), line=$(".compare-line"), range=$("#compare-range"), before=$("#before-img");
function updateCompare(){const v=Number(range.value);mask.style.width=v+"%";line.style.left=v+"%";before.style.width=compare.clientWidth+"px"}
range.addEventListener("input",updateCompare);window.addEventListener("resize",updateCompare);updateCompare();
const menu=$(".menu-toggle");menu.addEventListener("click",()=>{const open=$(".main-nav").classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"Close":"Menu"});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>{$(".main-nav").classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="Menu"}));
$("#year").textContent=new Date().getFullYear();setType("headstone");renderWork();
