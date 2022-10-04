package Team43.SocialCalendar.auth.handler;

import com.google.gson.JsonObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Slf4j
@Component
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        log.info("# Authenticated successfully!");
        sendSuccessResponse(response);
    }

    private void sendSuccessResponse(HttpServletResponse response) throws IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        PrintWriter out = response.getWriter();

        JsonObject json = new JsonObject();
        json.addProperty("AccessToken", response.getHeader("Authorization"));
        json.addProperty("RefreshToken", response.getHeader("Refresh"));
        out.print(json.toString());
    }
}
