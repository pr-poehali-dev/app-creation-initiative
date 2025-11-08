import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Современная платформа для онлайн-продаж с интуитивным интерфейсом",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Безопасное мобильное приложение для управления финансами",
      tags: ["React Native", "TypeScript", "Firebase"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "AI Dashboard",
      description: "Аналитическая панель с интеграцией машинного обучения",
      tags: ["Python", "TensorFlow", "React"],
      image: "/placeholder.svg"
    }
  ];

  const skills = [
    { name: "React & TypeScript", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Python & AI/ML", level: 80 },
    { name: "Cloud & DevOps", level: 75 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Создаю цифровые <span className="text-primary">решения</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Fullstack разработчик с фокусом на создание красивых и функциональных веб-приложений
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6">
              Мои проекты
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => navigate("/contact")}>
              Связаться
              <Icon name="Mail" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Проекты</h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Избранные работы из моего портфолио
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="container mx-auto px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Навыки</h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Технологии, с которыми я работаю
          </p>
          
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-lg font-medium text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100 + 300}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-12 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground">© 2024 Портфолио. Все права защищены.</p>
          <div className="flex gap-6">
            <Button variant="ghost" size="icon">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;