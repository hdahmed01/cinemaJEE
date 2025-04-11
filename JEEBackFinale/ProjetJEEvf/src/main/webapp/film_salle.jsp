<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test JSP</title>
</head>
<body>
    <h1>Test de la configuration JSP</h1>
    <p>Bonjour ! Si vous voyez cette page, votre configuration JSP fonctionne correctement.</p>

    <% 
        // Test d'une variable côté serveur
        String message = "Ce message est généré par JSP.";
    %>
    <p><strong>Message depuis le serveur :</strong> <%= message %></p>
</body>
</html>
