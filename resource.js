const cropInfo = {
    Spring: 'In spring, you can grow crops like strawberries, peas, and lettuce.',
    Summer: 'Summer is suitable for crops such as tomatoes, corn, Mangoes and watermelon.',
    Autumn: 'Autumn is the season for planting pumpkins, carrots, and broccoli, ladyfinger, bottel Gaurd.',
    Winter: 'Winter crops include Radish , Cauliflower, spinach, kale, and winter squash.'
};

document.getElementById('seasonSelect').addEventListener('change', function() {
    const selectedSeason = this.value;
    document.getElementById('cropInfo').innerHTML = cropInfo[selectedSeason];
});
