var choice = prompt("What would you like? Coffee, or tea?");

if (choice === 'coffee') {
    document.write("Excellent choice! Would you like milk and sugar with that?");
}
else if (choice === 'tea') {
    document.write("Excellent choice! Would you care for sweet or unsweet tea?");
}
else {
    document.write("Sorry, I do not understand what that is");
}