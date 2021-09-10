//TODO--ACTION:
//~ACTION-Action are plain js object that have a type field
//~Action only tell what to do

//!PAYLOAD FOR TAKE ARGUMENTS

export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};

