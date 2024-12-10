$(document).ready(function() {
    
    
    $("form").each(function() {
        $(this).validate({
            rules: {
                
                "subscribe-email": {
                    required: true,
                    email: true
                },
                "service-email": {
                    required: true,
                    email: true
                },
                
                "name": {
                    required: true
                },
                "email": {
                    required: true,
                    email: true
                },
                "message": {
                    required: true
                }
            },
            messages: {
                "subscribe-email": {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                "service-email": {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                "name": {
                    required: "Please enter your name"
                },
                "email": {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                "message": {
                    required: "Please enter your message"
                }
            },
            submitHandler: function(form) {
                
                alert("Form successfully submitted!");
                form.submit();
            }
        });
    });

    
    
    $("#quote-date").datepicker({
        dateFormat: "mm/dd/yy", 
        minDate: 0, 
        showAnim: "slideDown" 
    });

    
    $(".open-quote-modal").click(function() {
        $("#quote-modal").dialog({
            modal: true,
            width: 400,
            height: 300,
            buttons: {
                "Submit": function() {
                    $(this).dialog("close");
                    alert("Your quote request has been submitted!");
                },
                "Cancel": function() {
                    $(this).dialog("close");
                }
            }
        });
    });
});
   
document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to fetch a new cleaning quote when the button is clicked
    document.getElementById('fetch-quote').addEventListener('click', fetchCleaningQuote);

    function fetchCleaningQuote() {
        // Fetching data from an external API (example: cleaning-related quotes)
        fetch('https://api.api-ninjas.com/v1/quotes') // External API URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // Update the DOM with the fetched quote
                document.getElementById('quote-container').innerHTML = `
                    <blockquote>${data.content}</blockquote>
                    <p>- ${data.author}</p>
                `;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                document.getElementById('quote-container').textContent = 'Failed to fetch quote. Please try again.';
            });
    }
});
