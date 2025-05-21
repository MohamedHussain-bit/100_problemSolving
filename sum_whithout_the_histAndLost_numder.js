//! sum_with_out_the_hgist_and_lost_number
// check if the number nul return 0
// find the highest number
// find the loste number
// filter array
// sum the number in array


function sumWithoutHighestAndLowestNumber(array) {
  if (!array || array.length <= 2) return 0;

  // انسخ المصفوفة عشان ما تغير الأصل
  let sorted = [...array].sort((a, b) => a - b);

  // احذف أول وآخر عنصر (أصغر وأكبر قيمة)
  sorted.shift();  // removes min
  sorted.pop();    // removes max

  // احسب المجموع
  return sorted.reduce((sum, current) => sum + current, 0);
}

console.log(sumWithoutHighestAndLowestNumber([1, 2, 3, 4, 5, 6])); // 14