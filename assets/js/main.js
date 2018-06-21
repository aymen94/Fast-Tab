// 
const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const  week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const tags = ["mon", "d", "day", "y", "h", "m", "s"];

Number.prototype.pad = function(size){
  for (var s = String(this); s.length < size ; s = "0" + s );
  return s;
};

function updateClock() {
	let now = new Date();
	let seconds = now.getSeconds().pad(2);
	let minutes = now.getMinutes().pad(2);
	let hours = now.getHours().pad(2);
	let date = now.getDate().pad(2);
	let month = months[now.getMonth()];
	let day = week[now.getDay()];
	let year = now.getFullYear();
  let corr = [month,date,day,year,hours,minutes,seconds];
   for (let i = 0; i < tags.length; i++)
   document.getElementById(tags[i]).textContent = corr[i];
 }

function initClock() {
  updateClock();
  window.setInterval(updateClock,1000);
}

document.body.addEventListener('load',initClock());

// END CLOCK SCRIPT

/*
function viewBookmark(bookmarks) {

    for (let i=0; i<bookmarks.length;i++) {
    	let bookmark = bookmarks[i];
        let li = document.createElement("LI");
        if (bookmark.url)
        	li.innerHTML = `<a href="${bookmark.url}" >${bookmark.title}</a>`;
       
        if (bookmark.children) 
            viewBookmark(bookmark.children);

      
        document.getElementById("list").appendChild(li);
    }
}
*/

//chrome.bookmarks.getTree(viewBookmark);
/*
chrome.topSites.get(function(list){
	let text ="";
	console.log(list);
	for(let i=0; i < list.length; i++){
		let l = list[i];
        text+= `<li><a href="${l.url}">${l.title}</a></li><br>`;
	}
	 document.getElementById("toplist").innerHTML = text;
})

*/