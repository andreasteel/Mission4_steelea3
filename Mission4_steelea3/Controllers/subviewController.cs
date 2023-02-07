using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_steelea3.Controllers
{
    public class subviewController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
