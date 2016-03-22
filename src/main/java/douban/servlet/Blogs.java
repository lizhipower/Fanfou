package douban.servlet;

import douban.util.GetBlogs;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

/**
 * Created by ZhiLI on 2016/3/22.
 */
public class Blogs extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/json; charset=utf-8");

//        String dbJson = URLDecoder.decode(request.getParameter("dbJson"), "utf-8");

//        double num = Double.parseDouble(number1);   //解析成double格式
//        System.out.println("000");
        GetBlogs getBlogs = new GetBlogs();
        String blogsStr = getBlogs.getBlogs();
        PrintWriter out = response.getWriter();
        out.print(blogsStr);       //将后台数据传递到页面
        out.flush();
        out.close();


    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        doGet(request, response);
    }
    public static void main(String[] args)throws Exception{
//        getFromDatabase doDB=new getFromDatabase();
//        doDB.Delete();
//        doDB.Write();



    }
}
