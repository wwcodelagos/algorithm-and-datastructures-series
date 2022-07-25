class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        int length = students.length;
        int sandPoint = 0;
     
        int sandWichSum = 0;
        
        Queue<Integer> studs = new LinkedList<Integer>();
        
        for(int n : students){
            studs.add(n);
            
        }
  
        
        while(!studs.isEmpty() && sandWichSum != studs.size()){
            if(studs.peek() == sandwiches[sandPoint]){
                studs.poll();
                sandWichSum = 0;
                
                sandPoint++;
                
            }else{
                int person = studs.remove();
                studs.add(person);
                sandWichSum++;
            }
            
            length --;
        }
  
        return studs.size();
    }
}
