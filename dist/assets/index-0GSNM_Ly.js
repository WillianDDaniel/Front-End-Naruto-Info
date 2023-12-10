(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=function(){let a=[],o=[],c=0,r=0;function e(){document.getElementById("extra_info_text").textContent=o[r].text,document.getElementById("extra_info_title").textContent=o[r].name,document.getElementById("extra_info_img").src=o[r].image}function t(){const n=a[c];document.getElementById("character_name").textContent=n.name,document.getElementById("profile_img").src=n.profile_img,document.getElementById("village").textContent=n.village,document.getElementById("resume_img").src=n.resume_img,document.getElementById("resume_txt").textContent=n.resume,document.getElementById("more_title").textContent=`Mais Curiosidades sobre ${n.name}!`,document.getElementById("father").innerHTML=`<span>Pai:</span> ${n.additional.father}`,document.getElementById("mother").innerHTML=`<span>Mãe:</span> ${n.additional.mother}`,document.getElementById("jutsu").innerHTML=`<span>Jutsu:</span> ${n.additional.jutsu}`,document.getElementById("more").innerHTML=`<span>${n.additional.more}</span>`,o=n.extras,r=0,e()}async function s(){const n="https://backend-naruto-info.vercel.app/characters";try{a=(await(await fetch(n)).json()).characters,o=a[0].extras}catch(i){console.error("Erro ao buscar personagens:",i)}}function l(){document.getElementById("character_next").addEventListener("click",()=>{c=(c+1)%a.length,t()}),document.getElementById("character_prev").addEventListener("click",()=>{c===0?c=a.length-1:c--,t()}),document.getElementById("extra_info_previous").addEventListener("click",()=>{r===0?r=o.length-1:r--,e()}),document.getElementById("extra_info_next").addEventListener("click",()=>{r=(r+1)%o.length,e()})}return{fetchCharacters:s,addEventListeners:l}}();d.fetchCharacters();d.addEventListeners();
