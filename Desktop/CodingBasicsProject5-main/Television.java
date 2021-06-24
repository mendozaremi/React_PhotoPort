public class Television extends ServiceCommunicator{
    public Television(String televisionShow){

        super("http://api.tvmaze.com/singlesearch/shows?q=" + televisionShow);

    }

    public static void main(String[] argv) {
        System.out.println(new Television("Ramy").get());
       }
}