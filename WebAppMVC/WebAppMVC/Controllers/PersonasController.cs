using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;


namespace WebAppMVC.Controllers
{
    public class PersonasController : Controller
    {
        //GET: Index
        public ActionResult Index()
        {
            return View();
        }
        // GET: Crear
        public ActionResult Crear()
        {
            return View();
        }
        //GET: Buscar
        public ActionResult Buscar()
        {
            return View();
        }   

        //GET: Eliminar
        public ActionResult Eliminar()
        {
            return View();
        }
       
    }
}