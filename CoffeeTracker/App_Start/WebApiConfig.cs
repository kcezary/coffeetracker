using Common.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.ExceptionHandling;

namespace CoffeeTracker
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.MessageHandlers.Add(new NLogRequestAndResponseLogger());
            config.Services.Add(typeof(IExceptionLogger), new NLogExceptionLogger());

            var serializerSettings = config.Formatters.JsonFormatter.SerializerSettings;

            serializerSettings.TypeNameHandling = TypeNameHandling.Auto;
            serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Local;
            serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            serializerSettings.Converters.Add(new StringEnumConverter());
        }
    }

    public class NLogRequestAndResponseLogger : DelegatingHandler
    {
        private static readonly ILog Logger = LogManager.GetLogger(typeof(NLogRequestAndResponseLogger));

        protected override async Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request, CancellationToken cancellationToken)
        {
            // let other handlers process the request
            var result = await base.SendAsync(request, cancellationToken);

            Logger.Info($"{result.ResponseToString()}, Request: {request.RequestToString()}");

            return result;
        }
    }

    public class NLogExceptionLogger : ExceptionLogger
    {
        private static readonly ILog Logger = LogManager.GetLogger(typeof(NLogExceptionLogger));

        public override void Log(ExceptionLoggerContext context)
        {
            Logger.Fatal(context.Request.RequestToString(), context.Exception);
        }
    }

    public static class LoggerUtils
    {
        public static string RequestToString(this HttpRequestMessage request)
        {
            var message = new StringBuilder();
            if (request.Method != null)
                message.Append(request.Method);

            if (request.RequestUri != null)
                message.Append(" ").Append(request.RequestUri);

            return message.ToString();
        }

        public static string ResponseToString(this HttpResponseMessage response)
        {
            var message = new StringBuilder();
            return $"Status {response.StatusCode}";
        }
    }
}
