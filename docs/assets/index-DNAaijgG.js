(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))a(A);new MutationObserver(A=>{for(const o of A)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(A){const o={};return A.integrity&&(o.integrity=A.integrity),A.referrerPolicy&&(o.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?o.credentials="include":A.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(A){if(A.ep)return;A.ep=!0;const o=r(A);fetch(A.href,o)}})();const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUlSURBVHgB7ZxPbNt0FMef7WQlDa2qVqw0a7RkUlXgNE6UHtowCdgFMaH2gLSKQLlwGHQXekINExx6QCpC4lZVCAkktIlxKnDYmh0QaIB6mPijSsSlFaOb2mbZ1j9Jbe/3S2PXieLM2XMdJ3kf6af45ffq2N/62e/3zwJUQNO0q+wjBs3NgiAIL1hVikCgIAGR+MwGC9kImEJ2dna2Q5IkaGa6u7sjTJe46Sse0nJZZ+6omRgeHtb4181cYrGYVsIbZs0ohJGQgEiEQqqSZ35+PjI9PR3R7deGb8GxJ3ahmVm93QLfJo8a9tjY2OL4+Hhat/lDJKYba2trkEwmDedzoyfg+WeD0Mz89Pu9Ik3i8fhJcz2FMBIfeBxJ0sBtFEWw7et5Abu67oPbrK8HbYtIIYyEBERSkxB+vOcsCL62snXb61dgb+vvsnVCyzMgBF8ENGoG1PQcOEFNBAyGzoLUEipbp+z+ZykgtDwNYud7gEXLrQI4JCCFMBISEInn0xg32Nrys3LEsFW1gfJAN9A0oSrRzFAII+FXoKwbwWCwIxKJdOj2ys0s9D7pN5zDPUfAy2h7q/YcH+LHz1tH9LUD08SwmUa8J+agN4Z1T0eNA2A90qOjo8bznfXGwvmP93siuHg/X+wHr8JTE2V5CJxg5Nw/sHozl9/mGqRSi+bqCabZF7pBIYyEBERCAiIhAZGQgEhIQCQkIBISEAkJiKShOhOEwHOWddruH6yb5a5hZ7MHk6aqGYUrpWEEFPy9IB372rJekYdAKwioKCKk0wFwAgphJCQgktIQXmAlrhuTk5OJeDwe4duachfOfzRlOJ4eaoeXWdFpj74PkmQx0rZxBXY2roJX+eFaBr5nRefChU+MUUNFUXhXzIzJPWn+2yIBCzMvZd0uzMyM8G1ZluGtt981fHt7/EUCBjpPWY607bGRNi8LeGNpG76Z3zTs6c9fMfcBps3dV6VQCCMhAZHUVRqjZS7BHivlyKcxx6+B29AViIQEROJKCPtb+6H16KuGLVqkO/WIKwI+1nUqXxoRCmEkJCASx0J4c+kDY1tkzaDOp2bAaXh3leX8QLEdaoFjAmYz141tqyYdGpbrCYEB8BIUwkgO7SnMOxB0eNoi+hondTFzKALyec63fjtt2G3hd/KlEaEQRkICInGlJbJ757pt3+y9vyrs6E9QNz6FR0FT78Bh4IqA2cyv+YKFD03mhyc9BIUwEhIQSdMsc9jcDOQH1J2maQRUVfGR14JUgkIYycOuQLlQIJfL8bHSiF4h+qSi9RReX0NSSvFakDZ2bq2Gzc5VNrmmK+2nooBsQPlNfZu/FirF0O1EIgEDIx8avr9c7GeD7fUhIhdvYORgSe3U1BSkUgmzS4yd+7KdfVEIIyEBkdT1U3h722/7yaqqcCjUtYA7Oz52w6/t6/kohJGQgEiqSs1ZKnNc315ZWZlQFGVCt8defwnkZdnWfi59dsJ2yiOKWoXj2V9tnj8elprwZap24Onsl1/9aNiSJM2Ew2FjGNFuCsOp6h5o3jETsyjB5Cegr7F1kmqaX3Z/39eSK1pEDfuTKG2LZoZCGAnmKcz/Ywu60dfXdzIajXaUc+TTg3nRubG0A//+nwUnMTfNOPwKK7nKiurAdOywfy61hYV0SrOANZVcf3ks/80KpMAhKISRkIBInGyJ8JSm7D1wcHDwzNzc3BlwkVAodJl9XLaorthFVQ2OCcjSgO+s6gpvSHdVQMZipfUdTkEhjIQERPIAGJox35YuQuAAAAAASUVORK5CYII=",d="data:image/png;base64,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",g="data:image/png;base64,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",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABfCAYAAAC0nKSGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKySURBVHgB7ZxNatwwFMf/LgOlXzDQRaEUotyg29JF3U3XXWeTOUS7bi7QNkdob9CeoLPqem6QySYfkMCErLJynrADimKiyE+asZ/fDx7GGs2gN9b/SbI+CiSgqqoDuhjkZVkUxTaYPMLIUIelMwllIH2WdPkWyGaQnymV5V8gzz7p/O99GYIOo3amxOaZIlyOX4HPVcPiuVOlSSefUVefGz5gOJRU/sK5t2333M1Q+N9oAkMJGczJ4Y9ugmpYOhOqwi8gF9t2GzfBBq0dL9NryOEt2YGboBqWzugcLkjUZ17aE7KniOMH2blz/x+edjpgO0D7SIwNWi/B5xy3HT6iBv8QDOhBXCADqmHpWA1X4GP7q0fO/TFV6UswaDoM7sDFDmjYmk7lsOFqNkTzB3ADoWpYPLZZmoNPliYkBwUGgmq4I+qwdHrrMGl2VjkggX4t+oSlozMP6+IBM4EGGdhYxyPRoCUa1bB0smi4WTVg0ENyBa1dshl6iGpYOp2qtD8j18IUPSW6HU41EN8UqmHpaNDyaZYx/cTmOSH74qV9J3uFCB4SpW3ENegHp2CiGpZO29LDPbpsOUkGeZghjiskoE3DdoqyRGZotvF3TH56EHYpxnswUQ1LJ9d4eNlY78jl8F6sRteFalg6o1wvPYhVPKnQKi0ddVg66rB0dPDQY56RfWpJi2JIDj8n+womqmHppKrS296+3RX1rVdgQL9n34e7s5AGKajysAsm/tLDVKiGpTPKfUtbXtof1PtuOawa4+AHrSRM/DcV9AdwC2rJUtgUqIalM6S+dBcW8PYrSnd45c+AqIal01alF969bV647fK6WOL2rOUCseTqxGciOGhRDUtnfIMHRFLVpzPtBLJZLb1DWvTk0i6ow9LpouHHCJ/f8wb1IUYpuSANx3ckPK4BdI0LF9gfFQIAAAAASUVORK5CYII=";function w(e=m,t="Alura logo"){return`
        <article class='card-game'>
            <img src= "${e}" alt='${t}'>
        </article>
    `}window.CardFrontBack={};let s=1,c="",i=0;window.CardFrontBack.flipCard=e=>{const r=e.target.closest(".card-front-back"),a=document.querySelector(".icon-arrow").dataset.player,A=document.querySelectorAll(".player-score");let o=parseInt(A[0].dataset.pointsamount),n=parseInt(A[1].dataset.pointsamount);if(r!==c)if(r.classList.toggle("active"),s<2)c=r,s=2,console.log(r.querySelectorAll("img")[1]);else{const u=c.querySelectorAll("img"),p=r.querySelectorAll("img");u[1].src!==p[1].src?setTimeout(function(){r.classList.toggle("active"),c.classList.toggle("active"),window.IconArrow.HandleClick(),c=r},500):(c=r,i+=2,a==="player-1"?(o++,A[0].dataset.pointsamount=o,window.IconArrow.HandleClick()):(n++,A[1].dataset.pointsamount=n,window.IconArrow.HandleClick())),i==6&&setTimeout(()=>{window.DefineWinner(o,n)},1e3),s=0,console.log(i)}};function B(e=javascriptLogo,t="JavaScript Logo"){return`
        <article class="card-front-back" onClick='CardFrontBack.flipCard(event)'>
            <div class='card front'>
                ${w()}
            </div>
            <div class='card back'> 
                ${w(e,t)}
            </div>
        </article>
    `}function f(){return`
        <section class="board-game">
            ${[{icon:l,alt:"JavaScript Logo"},{icon:l,alt:"JavaScript Logo"},{icon:d,alt:"CSS Logo"},{icon:d,alt:"CSS Logo"},{icon:g,alt:"HTML Logo"},{icon:g,alt:"HTML Logo"}].sort(()=>Math.random()-.5).map(a=>B(a.icon,a.alt)).join("")}
        </section>
    `}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGUSURBVHgBpZI9a8JQFIZPYxFcJG4ZMznoklFwyP0J6uToH9B/IKGzgoNLM0kRdO7qEmdR4iQKShVHkXRxKBluz8lXY0jTtH0hN/fzueec9wK4MvDT4O/SPIYL03Xdarfbb9gfwO81oLPEINYjNqxYLAJ+IvZrw+HwHf9PKWFap9Op1et12RszarhhGJxkmiZnjHFvQUwA0RqjvXSGRAxi3QF9eQtqApDRnrB8oBC3m5iqqs4h3igNIzPce10dDgdYLpfBWK1Wq+ZoNLq7kVKJMcoxwE+TtN1uebfb5eVy2SRWBpvT+Xz+yGaz4u12kxVFcU5KkgS5XE7M5/PSYrFwaoYGNBuNhlypVILIxuMxzFEY4TNOvYZTaVGk0Xr6RoUNsG2bX69X3u/3ealUoshakLbYcSLYbDZLY96XL9FIfe33e97r9YInElXmG+AcDyqCIEh+TUm73c6p2XQ6XV8ulyZOndICA6MwPblQKIBlWYkG/AQkrTebzcPxeJTRbQmfB0wmk/VqtdJx7QX+IQZuvVIZ8AmX2lMBBFGAbQAAAABJRU5ErkJggg==";window.IconArrow={};window.IconArrow={HandleClick:()=>{const e=document.querySelector(".icon-arrow");e.dataset.player=="player-2"?e.dataset.player="player-1":e.dataset.player="player-2"}};function E(e="player-1"){return`
        <section data-player = "${e}" class='icon-arrow'>
            <img src='${S}' alt='An arrow indicating whose turn it is'>
        </section>
    `}function I(e){return`
        <p class = 'player-name'>
            ${e}
        </p>
    `}function Q(){return`
        <section class='versus-text'>
            vs
        </section>
    `}function C(e,t=0){return`
    <section id = 'player-${e}' data-pointsAmount="${t}" class='player-score'>
        <div class='points'></div>
        <div class='points'></div>
        <div class='points'></div>
    </section>
    `}function U(){return`
        <header class="score-board">
                <div id='div-icon-arrow'>
                    ${E("")}
                </div>
                <div class='div-score'>
                    ${I("player1")}
                    <div class='score-player' onClick="IconArrow.HandleClick(event)">
                        ${C("1",0)}
                    </div>
                    ${Q()}
                    
                    <div class='score-player' onClick="IconArrow.HandleClick(event)">
                        ${C("2",0)}
                    </div>
                    ${I("player2")}
                </div>

        </header>
    `}const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANUSURBVHgB7ZtLSyNBEMcroiCCGB83kZ2D4EEQRW8ebO9+BSEfwYOeN3sX/Ar7GTzqIfEgeFy9iQ9mk0Ag7wck5EW2a7Pd9MxmJj2TmUQ6/YOC1ExN6Ib+d01VJxEYjz5Mhwj4ZA5mjJmb8Dx4Y59alDmEEJgGyWSSCG6F2i8IiQQMdPvXpoU4hn9jkkZrWHVQw989xBuygeVyGUqlEvc3NzdhcXERQsAAD3PAfOY7lw7kNJyPjw/4/Pzk/tHREayurkIQRCK+07DWsPJYlvTKygrs7u7ym7VaDarVKvdzuRy0Wi3ui0u6Xq/D6+sr93H5rq2tcX95eRnm572mfYdBC0va65gtI1hYWICNjQ3Ll3c6Hf55bs55QWAcblQMnHBQmnXD65i1hlXHouGlpSXY2tpyDE6lUtBsNrnvlpbCRNSw1zHrJa06uEsnmUOXaLTRaOwzH3dAtGmDKU/ced3AOFsslo4V5uCET5lD1zpJp9O83FpfX/9vy58GmN/FlOcG5uBisSheuqD2wBytYdWxv+uZ1OLMabfbpFAoEOZ3u11LcDzOQ8EwDIjFYhAE9tLy9vYWTNMcGot6pWPkPh1zEoR9ifIbPIB1Zl/GaH+rHxTv7+/9u7s7bnt7e33ZccCI2lhrWHVGtQ4Mat9Agu3t7QPaxrlhPupZVtP20hI1i8agJd5FNpuVbcWiZk2nm6MKVBNcHhahuotQ476XnrW9tMQN6vn5WQzByT5AAGgNq47/9t9oMD3EmXN9fQ00vQwNxOV7dXUlXsLnfkAI6CWtOsG0ESUQd3A72LRXAenXUvD4ejgOWsOqE2ZaItROmEOb8jHaFDeYb+tKmNR+Cj6+VSUhBMKcsIWdnR1sHRHmi+/OMJjcKUwArWHVmVgexhOAr8DEJiwed0wTrWHV0RNWHZ2WxgB/dLrvdPP4+DjqdBJJm3jRx8dHAs5YTgC/CgRcSr5EIuF40oD3wL1cPIGA0BpWnXE1zDsTh4eHxtnZmWMgni6KiG2dXq8H5+fnjs8+PT3F3t7eiHDJd0dz3PKQ/4wHTxqoFqUfvL+/l469vLyEl5cX8ZL+k4csWsMeIexDJpM5oMv6RvbBSkU+rebzefxhSmh/5PALAf9tWZ2Hw2LmJvwHuMdVHnpybr4AAAAASUVORK5CYII=";window.restartGame=()=>{location.reload()};window.DefineWinner=function(e,t){const r=e>t?"Player 1":"Player 2";document.querySelector(".winner").innerHTML=r,document.querySelector(".game-over-screen").classList.add("active")};function y(){return`
        <section class='game-over-screen'>
            <div class='game-over'>
                <h1 class='winner game-over-text'>No one</h1>
                <h2 class='winner-text game-over-text'>is the Winner!!!</h2>
                <img src = ${L}>
                <button class='restart-button' onClick='restartGame()'>restart</button>
            </div>
        </section>
    `}const G=document.querySelector("#root");G.insertAdjacentHTML("beforeend",`
        ${U()}
        ${f()}
        ${y()}
    `);
