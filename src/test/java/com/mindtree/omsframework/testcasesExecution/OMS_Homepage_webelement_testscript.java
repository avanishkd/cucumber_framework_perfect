package com.mindtree.omsframework.testcasesExecution;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.codehaus.plexus.util.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.mindtree.omsframework.base.TestBase_OpenBrowser_TakeData_config;
import com.mindtree.omsframework.pagesobject.OMS_Homepage;
import com.mindtree.omsframework.pagesobject.OMS_homepage_webelement;
import com.mindtree.omsframework.utility.TestUtil_ExcelRead_OMS;

public class OMS_Homepage_webelement_testscript extends TestBase_OpenBrowser_TakeData_config {
	
	OMS_Homepage oms_homepage;
	OMS_homepage_webelement oms_homepage_webelement;
	TestUtil_ExcelRead_OMS testutil_oms;
	ExtentReports reports;
	ExtentTest testinfo;
	ExtentHtmlReporter htmlReporter;
	public static WebDriver driver;
	public static Properties prop;
	
	
	public OMS_Homepage_webelement_testscript() {
		try {
			prop = new Properties();
			FileInputStream ip = new FileInputStream(System.getProperty("user.dir") + "/src/test/java/com/mindtree/"
					+ "/omsframework/config/config.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@BeforeTest
	public void setup() {
		htmlReporter =new ExtentHtmlReporter(new File(System.getProperty("user.dir")+"./Report/OMS_Report.html"));
		htmlReporter.loadXMLConfig(new File(System.getProperty("user.dir")+"./extent-config/extent-config.xml"));
		reports=new ExtentReports();
		reports.setSystemInfo("Environment", "QA");
		reports.attachReporter(htmlReporter);
	}
	
	public static  String getScreenshot(WebDriver driver,String screenshotName) throws IOException {
		String dateName=new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
		TakesScreenshot ts=(TakesScreenshot)driver;
		File sourse=ts.getScreenshotAs(OutputType.FILE);
		String destination=System.getProperty("user.dir")+"/Screenshots/"+screenshotName+ dateName+ ".png";
		File dest=new File(destination);
		FileUtils.copyFile(sourse, dest);
		return destination;
	}
	@BeforeMethod
	public void register(Method method) {
		
		String testName=method.getName();
		testinfo=reports.createTest(testName);
		initialization();
		oms_homepage=new OMS_Homepage(driver);
		testutil_oms=new TestUtil_ExcelRead_OMS();
		oms_homepage_webelement=new OMS_homepage_webelement();
	}
	//all the test case for all the button present at the side bar of OMS Webpage
	
	@Test(priority=1)
	public void TestCase_Batch_Button_OMS() {
		oms_homepage=oms_homepage_webelement.clickOnOMS_Homepage_btn_checking_batch();
	}
	@Test(priority=2)
	public void TestCase_Track_Button_OMS() {
		oms_homepage=oms_homepage_webelement.clickOnOMS_Homepage_btn_checking_track();
	}
	@Test(priority=3)
	public void TestCase_Assginment_Button_OMS() {
		oms_homepage=oms_homepage_webelement.clickOnOMS_Homepage_btn_checking_assginment();
	}
	@Test(priority=4)
	public void TestCase_Groups_Button_OMS() {
		oms_homepage=oms_homepage_webelement.clickOnOMS_Homepage_btn_checking_groups();
	}
	
	@Test(priority=5)
	public void TestCase_Users_Button_OMS() {
		oms_homepage=oms_homepage_webelement.clickOnOMS_Homepage_btn_checking_usersbtn();
	}
	
	@AfterMethod
	public void capturestatus(ITestResult result) throws IOException {
		if(result.getStatus()==ITestResult.SUCCESS) {
			testinfo.log(Status.PASS, "OMS test Case "+result.getName()+"is passed");
		}else if(result.getStatus()==ITestResult.FAILURE) {
		    testinfo.log(Status.FAIL, "OMS test case "+result.getName()+"is failed");
		    testinfo.log(Status.FAIL, "OMS test case "+result.getThrowable());
		    String screenshotpath=OMS_Homepage_Test.getScreenshot(driver, result.getName());
		    testinfo.log(Status.FAIL, "oms test fail");
		    testinfo.addScreenCaptureFromPath(screenshotpath);
		}else if(result.getStatus()==ITestResult.SKIP) {
			testinfo.log(Status.PASS, "OMS test Case "+result.getName()+"is skip");
			testinfo.log(Status.SKIP, "OMS test case skip");
		}
	}
	
	@AfterTest
	public void cleanup() {
		reports.flush();
	}
	
	@AfterSuite

	public void tearDown() {

		sendPDFReportByGMail("gajendragajju8@gmail.com", "gajendra5232", "gajendragajju8@gmail.com", "OMS PDF Report", "");

	}
	private static void sendPDFReportByGMail(String from, String pass, String to, String subject, String body) {

		Properties props = System.getProperties();

		String host = "smtp.gmail.com";

		props.put("mail.smtp.starttls.enable", "true");

		props.put("mail.smtp.host", host);

		props.put("mail.smtp.user", from);

		props.put("mail.smtp.password", pass);

		props.put("mail.smtp.port", "587");

		props.put("mail.smtp.auth", "true");

		Session session = Session.getDefaultInstance(props);

		MimeMessage message = new MimeMessage(session);

		try {

			// Set from address

			message.setFrom(new InternetAddress(from));

			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

			// Set subject

			message.setSubject(subject);

			message.setText(body);

			BodyPart objMessageBodyPart = new MimeBodyPart();

			objMessageBodyPart.setText("Please Find The Attached Report File!");

			Multipart multipart = new MimeMultipart();

			multipart.addBodyPart(objMessageBodyPart);

			objMessageBodyPart = new MimeBodyPart();

			// Set path to the pdf report file

			//String filename = System.getProperty("user.dir") + "\\Default Test.pdf";
			String filename = System.getProperty("user.dir") + "\\Test.pdf";
			//String filename = System.getProperty("user.dir") + "./Report/OMS_ReportTest.pdf";
			
			// Create data source to attach the file in mail

			DataSource source = new FileDataSource(filename);

			objMessageBodyPart.setDataHandler(new DataHandler(source));

			objMessageBodyPart.setFileName(filename);

			multipart.addBodyPart(objMessageBodyPart);

			message.setContent(multipart);

			Transport transport = session.getTransport("smtp");

			transport.connect(host, from, pass);

			transport.sendMessage(message, message.getAllRecipients());
           System.out.println("Email sent");
			transport.close();

		}

		catch (AddressException ae) {

			ae.printStackTrace();

		}

		catch (MessagingException me) {

			me.printStackTrace();

		}

	}
}