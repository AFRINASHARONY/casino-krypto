// footer.js

function loadFooter() {
    // Create a div to hold the content
    var container = document.createElement('div');
  
    // Set the HTML content for the footer
    container.innerHTML = `
    <!DOCTYPE html>
<html>

<head>
    <title>Navigation Bar</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css">
</head>

<body id="main-box">
    
    <!-- Your page content goes here -->

    <div class="footer">
        <div class="footer-column">
            <h2>Cryptocurrencies</h2>
            <ul>
                <li><a href="#">Bitcoin</a></li>
                <li><a href="#">Ethereum</a></li>
                <li><a href="#">Dogecoin</a></li>
                <li><a href="#">Litecoin</a></li>
                <li><a href="#">Binance Coin</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h2>Online Casinos</h2>
            <ul>
                <li><a href="#">New Online Casinos</a></li>
                <li><a href="#">VPN Casinos</a></li>
                <li><a href="#">Mobile Casinos</a></li>
                <li><a href="#">Casino Bonuses</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h2>Payment Methods</h2>
            <ul>
                <li><a href="#">Mastercard casinos</a></li>
                <li><a href="#">Visa Casinos</a></li>
                <li><a href="#">Neteller</a></li>
                <li><a href="#">Bank Transfer</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h2>Casino Games</h2>
            <ul>
                <li><a href="#">Slots</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h2>Providers</h2>
            <ul>
                <li><a href="#">Microgaming</a></li>
                <li><a href="#">Spinomenal</a></li>
                <li><a href="#">Push Gaming</a></li>
            </ul>
        </div>
    </div>
</body>

</html>
    `;
  
    // Append the content to the body
    document.getElementById('footer-container').appendChild(container);
  }
  
  // Call the function to load the footer when the DOM is ready
  document.addEventListener('DOMContentLoaded', loadFooter);
  