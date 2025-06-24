import logements from '../../logements.json'


export function getLogements(){
    return logements;
}

export function getLogementsById(id){
    return logements.find(item => item.id === id);
}

