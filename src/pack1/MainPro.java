package pack1;

public class MainPro {

	public String nameWelcome(String name)
	{
		String msg = null;
		msg  = "Welcome "+name+" !!";
		System.out.println(msg);
		int myNum = Integer.parseInt("Hello");
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// 
			Thread.currentThread().interrupt();
			e.printStackTrace();
		}
		return msg;
	}
}
