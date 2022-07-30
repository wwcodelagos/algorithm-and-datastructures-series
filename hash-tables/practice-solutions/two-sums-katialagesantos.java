class Solution {
    public int[] twoSum(int[] nums, int target) {        
        int[] indices = new int[2];
        indices[0]=-1;
        indices[1]=-1;
        
        // map each num entry to a list containing the indices 
        // of ocurrence in nums
        Map<Integer, List<Integer>> numsMap = new HashMap();
        for(int i=0; i< nums.length; i++){
            Integer key = nums[i];
            if(numsMap.get(key)!=null){
                List<Integer> indicesList = numsMap.get(key);
                indicesList.add(i);
            }else{
                List<Integer> newList = new ArrayList();
                newList.add(i);
                numsMap.put(key, newList);
            }
        }
        
        Integer[] numValues = numsMap.keySet().toArray(new Integer[0]);
        
        // verify if same num occur as many times as equal to target
        for(int i=0; i<numValues.length && (indices[0]==-1); i++){
            Integer numValue = numValues[i];
            List<Integer> numIndices = (List) numsMap.get(numValue);
            int ocurrences = numIndices.size();
            int sumTotalNum = numValue * ocurrences;
            if(ocurrences==2 && (sumTotalNum==target)){
                indices[0]=numIndices.get(0);
                indices[1]=numIndices.get(1);
            }
        }
        
        if(indices[0]==-1){
            for(int i=0; i<numValues.length && (indices[0]==-1); i++){
                for(int j=i; j<numValues.length && (indices[1]==-1); j++){
                    Integer num1=numValues[i];
                    Integer num2=numValues[j];
                    if(num1 + num2 == target){
                        indices[0]=numsMap.get(num1).get(0);
                        indices[1]=numsMap.get(num2).get(0);
                    }
                }
            }
            
        }
        
        return indices;
        
    }    
}
