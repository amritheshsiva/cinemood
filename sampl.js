document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const character1 = document.getElementById('character1').value;
    const character2 = document.getElementById('character2').value;
    const place = document.getElementById('place').value;
    const scenario = document.getElementById('scenario').value;

    const story = `In the bustling town of ${place}, there lived two friends named ${character1} and ${character2}. 
    One day, they found themselves caught up in a peculiar situation: ${scenario}. As the sun set, the town's lights flickered on, and the air buzzed with excitement.
    ${character1}, always the curious one, decided to investigate further, while ${character2} reluctantly followed.
    Together, they navigated through the narrow streets, encountering various challenges and surprises along the way.
    Despite the odds, their friendship and determination saw them through, and by the end of the night, they had uncovered secrets that would change their lives forever.
    This adventure not only strengthened their bond but also made them local heroes in ${place}.`;

    document.getElementById('storyOutput').innerText = story;
});
