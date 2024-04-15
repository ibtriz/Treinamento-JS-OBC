class BattleSpaceship extends Spaceship {
      constructor(name, crewQuantity, weaponsQuantity) {
        super(name, crewQuantity) // dizendo para herdar esses mesmos atributos da classe mãe
        this.weaponsQuantity = weaponsQuantity
      }
    }
    