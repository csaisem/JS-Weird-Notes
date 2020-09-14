const heroAcademy = {

    heroes: [],

    showRoster: function() {
        console.log('Current Roster:')
        for (let i = 0; i < this.heroes.length; i++) {
            console.log(this.heroes[i].name)
        }
    },

    addHero: function(name) {
        this.heroes.push({
            name,
            good: true,
            powered: true
        })
        this.showRoster()
    }
}
