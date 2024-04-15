module.exports = {
    get AU_IN_KILOMETERS() { return 149587870 },
    convertAUtoKm(au) {
      return au * this.AU_IN_KILOMETERS
    }
  }
  