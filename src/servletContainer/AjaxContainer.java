package servletContainer;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import pack1.MainPro;

/**
 * Servlet implementation class AjaxContainer
 */
public class AjaxContainer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AjaxContainer() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		String fnlmsg = null;
		PrintWriter out = response.getWriter();
		
		MainPro mpro = new MainPro();
		
		try{

		fnlmsg =  mpro.nameWelcome("User1");
		
		}
		catch(Exception e)
		{
			
			fnlmsg = "Issue in data retrevial. Contact Administrator";
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR ,fnlmsg);
			e.printStackTrace();
		}
		out.append(fnlmsg);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
