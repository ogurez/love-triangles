/**
 * @param preferences - an preferencesay of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let triangles=0;

	for(let i=0; i<preferences.length; i++){
		if(preferences[i]!==i+1 && preferences[preferences[preferences[i]-1]-1]===i+1){
	triangles++;
}
		
	}
	return triangles/3;
};
