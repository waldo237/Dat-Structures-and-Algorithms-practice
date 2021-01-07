function flattenDictionary(dictionary){
    let flattenedDict = {};
    function flattenDictionaryHelper(dictionary, propName){
        if(typeof dictionary !='object'){
            flattenedDict[propName] = dictionary;
            return;
        }
        for(let prop in dictionary){
            if(propName == ""){
                flattenDictionaryHelper(dictionary[prop], propName + prop);
            }else{
                flattenDictionaryHelper(dictionary[prop], `${propName}.${prop}` );
            }
        }
    }
    flattenDictionaryHelper(dictionary, '');
    return flattenedDict;
}


const ob = {cal: {secondNest: {thirdNest: 'this is a string'}}}

console.log(flattenDictionary(ob))
;