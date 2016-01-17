/*
* @Author: ben_cripps
* @Date:   2015-09-23 21:28:42
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-11-19 20:54:20
*/

const colors = [
    '#C91F37',
    '#DC3023',
    '#9D2933',
    '#CF000F',
    '#E68364',
    '#F22613',
    '#CF3A24',
    '#C3272B',
    '#8F1D21',
    '#D24D57',
    '#F08F90',
    '#F47983',
    '#DB5A6B',
    '#C93756',
    '#FFB3A7',
    '#F62459',
    '#F58F84',
    '#875F9A',
    '#5D3F6A',
    '#89729E',
    '#763568',
    '#8D608C',
    '#A87CA0',
    '#5B3256',
    '#BF55EC',
    '#8E44AD',
    '#9B59B6',
    '#BE90D4',
    '#4D8FAC',
    '#5D8CAE',
    '#22A7F0',
    '#19B5FE',
    '#59ABE3',
    '#48929B',
    '#317589',
    '#89C4F4',
    '#4B77BE',
    '#1F4788',
    '#003171',
    '#044F67',
    '#264348',
    '#7A942E',
    '#8DB255',
    '#5B8930',
    '#6B9362',
    '#407A52',
    '#006442',
    '#87D37C',
    '#26A65B',
    '#26C281',
    '#049372',
    '#2ABB9B',
    '#16A085',
    '#36D7B7',
    '#03A678',
    '#4DAF7C',
    '#D9B611',
    '#F3C13A',
    '#F7CA18',
    '#E2B13C',
    '#A17917',
    '#F5D76E',
    '#F4D03F',
    '#FFA400',
    '#E08A1E',
    '#FFB61E',
    '#FAA945',
    '#FFA631',
    '#FFB94E',
    '#E29C45',
    '#F9690E',
    '#CA6924',
    '#F5AB35',
    '#BFBFBF',
    '#BDC3C7',
    '#757D75',
    '#ABB7B7',
    '#6C7A89',
    '#95A5A6'
];

const randomizedColors = function(colors) {

    let currentIndex = colors.length;
    let temporaryValue;
    let randomIndex ;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = colors[currentIndex];
        colors[currentIndex] = colors[randomIndex];
        colors[randomIndex] = temporaryValue;
    }

    return colors;

};

export default randomizedColors.bind(this, colors);

