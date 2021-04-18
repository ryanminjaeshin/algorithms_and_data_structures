/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.map = {
        big: big,
        medium: medium,
        small: small,
    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    // 1 small
    // 2 medium
    // 3 big
    if (carType == 1) {
        if (this.map.big >= 1) {
            this.map.big -= 1
            return true
        } else {
            return false;
        }
    }
    if (carType == 2) {
        if (this.map.medium >= 1) {
            this.map.medium -= 1
            return true
        } else {
            return false;
        }
    }
        if (carType == 3) {
        if (this.map.small >= 1) {
            this.map.small -= 1
            return true
        } else {
            return false;
        }
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */