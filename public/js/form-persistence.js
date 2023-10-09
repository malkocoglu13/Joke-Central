// JavaScript to preserve selected options
document.addEventListener("DOMContentLoaded", function () {
    const categorySelect = document.getElementById("category-select");
    const languageSelect = document.getElementById("language-select");
    const blacklistSelect = document.getElementById("blacklist-select");
    const joketypeSelect = document.getElementById("joketype-select");
  
    // Get the selected values from localStorage (if available)
    const selectedCategory = localStorage.getItem("selectedCategory");
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    const selectedBlacklist = localStorage.getItem("selectedBlacklist");
    const selectedJoketype = localStorage.getItem("selectedJoketype");
  
    // Set the selected options based on localStorage values
    if (selectedCategory) {
      categorySelect.value = selectedCategory;
    }
  
    if (selectedLanguage) {
      languageSelect.value = selectedLanguage;
    }
  
    if (selectedBlacklist) {
      blacklistSelect.value = selectedBlacklist;
    }
  
    if (selectedJoketype) {
      joketypeSelect.value = selectedJoketype;
    }
  
    // Save selected options to localStorage when the form is submitted
    document.getElementById("form").addEventListener("submit", function () {
      localStorage.setItem("selectedCategory", categorySelect.value);
      localStorage.setItem("selectedLanguage", languageSelect.value);
      localStorage.setItem("selectedBlacklist", blacklistSelect.value);
      localStorage.setItem("selectedJoketype", joketypeSelect.value);
    });
  });
  