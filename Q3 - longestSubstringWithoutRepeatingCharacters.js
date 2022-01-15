const lengthOfLongestSubstring = function (s) {
   let start = 0;
   let max = 0;
   let visitedCharByPosition = {};

   for (var position = 0; position < s.length; position++) {
      let nextChar = s[position];
      if (
         nextChar in visitedCharByPosition &&
         visitedCharByPosition[nextChar] >= start
      ) {
         start = visitedCharByPosition[nextChar] + 1;
         visitedCharByPosition[nextChar] = position;
      } else {
         visitedCharByPosition[nextChar] = position;

         max = Math.max(max, position + 1 - start);
      }
   }
   return max;
};
