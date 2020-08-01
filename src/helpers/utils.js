import { v4 as uuidv4 } from 'uuid';

const REPLACE_MARKER = "%e%";


class Utils {
    
    constructor() {}

    selectorBuilder(baseLineLocator, toAddLocator) {
        try {
            return baseLineLocator.replace(REPLACE_MARKER, toAddLocator);
        } catch (e) {
            throw e;
        }
    }

    getUUID4() {
        try {
            return uuidv4();
        } catch (e) {
            throw e;
        }
    }
}

export default new Utils();